import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            countries: [],
            filteredCountries: []
        }
    },
    mutations: {
        setCountries(state, countries) {
            if (countries.length == 0)
                state.filteredCountries = state.countries;
            else
                state.filteredCountries = countries;

            if (state.countries.length == 0)
                state.countries = countries;
        }
    }
});