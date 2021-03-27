<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from "./layout/Layout.vue";
import fetchCountries from "./api/fetchCountries";

export default {
  name: "App",
  components: {
    Layout,
  },
  methods: {
    async loadCountries() {
      console.log(process.env.NODE_ENV);
      console.log(process.env.BASE_URL);
      let results = await fetchCountries();
      
      let countries = results.map((c) => ({
        name: c.Country,
        active: c.TotalConfirmed - c.TotalDeaths - c.TotalRecovered,
        died: c.TotalDeaths,
        recovered: c.TotalRecovered,
        code: c.CountryCode
      }));

      this.$store.commit('setCountries', countries);
    }
  },
  mounted() {
    this.loadCountries();
  },
};
</script>