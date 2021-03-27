<template>
  <div id="chart"></div>
</template>

<script>
import Highcharts from "highcharts";

// Add bubble chart type
import more from "highcharts/highcharts-more";
more(Highcharts);

export default {
  methods: {
    formatNumber(input) {
      return Number.isInteger(input)
        ? Intl.NumberFormat('sr').format(input)
        : input;
    },
    generateChart() {
      let me = this;
      let chart = Highcharts.chart("chart", {
        chart: {
          type: "bubble",
          plotBorderWidth: 1,
          zoomType: "xy",
          height: "75%",
        },

        legend: {
          enabled: false,
        },

        title: {
          text: undefined,
        },

        subtitle: {
          text: undefined,
        },

        xAxis: {
          gridLineWidth: 1,
          title: {
            text: "Recovered",
          },
        },

        yAxis: {
          startOnTick: false,
          endOnTick: false,
          title: {
            text: "Died",
          },
          maxPadding: 0.2,
        },

        tooltip: {
          useHTML: true,
          formatter: function () {
            return (
              '<table><tr><th colspan="2"><h3>' +
              this.point.country +
              "</h3></th></tr>" +
              '<tr><th>Recovered:</th><td class="text-end">' +
              me.formatNumber(this.x) +
              "</td></tr>" +
              '<tr><th>Died:</th><td class="text-end">' +
              me.formatNumber(this.y) +
              "</td></tr>" +
              '<tr><th>Active:</th><td class="text-end">' +
              me.formatNumber(this.point.active) +
              "</td></tr></table>"
            );
          },
          followPointer: true,
        },

        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: "{point.code}",
            },
          },
        },

        series: [
          {
            id: "countrySeries",
            data: [],
          },
        ],

        credits: {
          enabled: false,
        },
      });

      chart.series[0].setData(this.chartData);
    },
  },
  watch: {
    count() {
      this.chartInstance.series[0].setData(this.chartData);
    },
  },
  computed: {
    chartData() {
      let countries = this.$store.state.filteredCountries;
      let maximumActive = Math.max.apply(
        Math,
        countries.map((c) => c.active)
      );

      return countries.map((c) => ({
        x: c.recovered,
        y: c.died,
        z: (c.active / maximumActive) * 100, // notmalize buble size
        active: c.active,
        code: c.code,
        country: c.name,
      }));
    },
    count() {
      return this.$store.state.filteredCountries.length;
    },
    chartInstance() {
      let node = document.getElementById("chart");
      return Highcharts.charts[node.getAttribute("data-highcharts-chart")];
    },
  },
  mounted() {
    this.generateChart();
  },
};
</script>
