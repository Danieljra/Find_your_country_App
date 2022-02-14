import {
  GET_ALL_COUNTRIES,
  FILTER_BY_CONTINENT,
  FILTER_BY_POPULATION,
  ALPHABETICAL_ORDER,
  GET_ALL_ACTIVITIES,
  POST_NEW_ACTIVITY,
  FILTER_ACTIVITIES,
  SEARCH_BY_NAME,
  GET_DETAIL_COUNTRY,
} from "../actions";

const initialStore = {
  allcountries: [],
  loadedCountries: [],
  allActivities: [],
  detailCountry: [],
};
const rootReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        loadedCountries: payload,
        allcountries: payload,
      };

    case FILTER_BY_CONTINENT:
      const countries = state.allcountries;
      const continentFiltered = countries.filter(
        (c) => c.continent === payload
      );

      return {
        ...state,
        loadedCountries: continentFiltered,
      };

    case FILTER_BY_POPULATION:
      const countriesByPopulation =
        payload === "Lowest"
          ? state.loadedCountries.sort((a, b) => {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.loadedCountries.sort((a, b) => {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        loadedCountries: countriesByPopulation,
      };

    case ALPHABETICAL_ORDER:
      const InalphabeticalOrder =
        payload === "A-->Z"
          ? state.loadedCountries.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.loadedCountries.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        loadedCountries: InalphabeticalOrder,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: payload,
      };

    case POST_NEW_ACTIVITY:
      return {
        ...state,
      };

    case FILTER_ACTIVITIES:
      const array1 = state.allcountries;
      let activitiesPerCountry = [];

      for (let country of array1) {
        if (country.activities.length !== 0) {
          for (let el of country.activities) {
            if (el.name === payload) {
              activitiesPerCountry = [...activitiesPerCountry, country];
            }
          }
        }
      }

      return {
        ...state,
        loadedCountries: activitiesPerCountry,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        loadedCountries: payload,
      };

    case GET_DETAIL_COUNTRY:
      return {
        ...state,
        detailCountry: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
