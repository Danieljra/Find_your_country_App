import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION";
export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER";
export const POST_NEW_ACTIVITY = "POST_NEW_ACTIVITY";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_DETAIL_COUNTRY = "GET_DETAIL_COUNTRY";

export const getallCountries = () => {
  return async (dispatch) => {
    try {
      let countries = await axios.get("http://localhost:3001/Countries");
      //console.log(countries);
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: countries.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const filterCountriesByContinenet = (nameOfContinent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: nameOfContinent,
  };
};

export const filterCountriesByPopulation = (payload) => {
  return {
    type: FILTER_BY_POPULATION,
    payload,
  };
};

export const alphabeticalOrder = (payload) => {
  return {
    type: ALPHABETICAL_ORDER,
    payload,
  };
};

export const getallActivities = () => {
  return async (dispatch) => {
    try {
      const info = await axios.get("http://localhost:3001/activity");
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: info.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
export const postNewActivity = (body) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/activity", body);
    console.log(response);
    return response;
  };
};

export const filterActivities = (payload) => {
  return {
    type: FILTER_ACTIVITIES,
    payload,
  };
};

export const searchByName = (nameOfCountry) => (dispatch) => {
  return fetch("http://localhost:3001/Countries?name=" + nameOfCountry)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dispatch({
        type: SEARCH_BY_NAME,
        payload: json,
      });
    })
    .catch(
      (error) => console.log(error),
      dispatch({
        type: SEARCH_BY_NAME,
        payload: [],
      })
    );
};

export const getDetailCountry = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/Countries/${id}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: GET_DETAIL_COUNTRY,
        payload: json,
      });
    })
    .catch((error) => console.log(error));
};
