<template>
  <AutoComplete
    :multiple="true"
    v-model="selectedCountries"
    :suggestions="filteredCountries"
    @complete="searchCountry($event)"
    @item-select="onItemSelect($event)"
    @item-unselect="onItemSelect($event)"
    field="name"
    :placeholder=placeholder
    forceSelection=true
  />
</template>

<script>
import AutoComplete from "primevue/autocomplete";
export default {
  //emits:['selected'],
  components: {
    AutoComplete,
  },
  data() {
    return {
      filteredCountries: [],
      selectedCountries: []
    };
  },
  computed:{
    placeholder(){
      return this.selectedCountries.length > 0 ? "" : "Search for countries to filter data";
    }
  },
  methods: {
    searchCountry(event) {
      this.filteredCountries = this.$store.state.countries.filter((country) => {
        let re = new RegExp(event.query, "i");
        
        return country.name.match(re);
      });
    },
    onItemSelect(){
      //this.$emit("selected", this.selectedCountries);
      this.$store.commit('setCountries', this.selectedCountries);
    }
  }
};
</script>