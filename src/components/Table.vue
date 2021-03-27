<template>
  <table class="table table-striped table-borderless">
    <thead class="table-primary">
      <tr>
        <th
          v-for="(value, name, index) in countries[0]"
          :key="name"
          :class="[index == 0 ? 'text-start' : 'text-end']"
        >
          {{ name.toUpperCase() }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in countries" v-bind:key="r.code">
        <td v-for="cell in r" :key="cell" :class="[cssClass(cell)]">
          {{ formatNumber(cell) }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td v-for="cell in summary" :key="cell" :class="[cssClass(cell)]">
          {{ formatNumber(cell) }}
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "Table",
  methods: {
    formatNumber(input) {
      return Number.isInteger(input)
        ? Intl.NumberFormat("sr").format(input)
        : input;
    },
    cssClass(input) {
      return Number.isInteger(input) ? "text-end" : "text-start";
    },
  },
  computed: {
    countries() {
      return this.$store.state.filteredCountries.map((c) => ({
        name: c.name,
        active: c.active,
        died: c.died,
        recovered: c.recovered,
      }));
    },
    summary() {
      let s = [];
      if (this.countries.length > 0)
        s = this.countries.reduce(
          (accumulator, currentRow) => {
            accumulator[1] += currentRow.active;
            accumulator[2] += currentRow.died;
            accumulator[3] += currentRow.recovered;

            return accumulator;
          },
          ["TOTALS", 0, 0, 0]
        );
      return s;
    },
  },
};
</script>