import React from "react";
import { useDispatch } from "react-redux";
import { filterCountriesByContinenet } from "../../actions";
import Styles from "./FilterByContinent.module.css";
const FilterByContinent = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handlefilterContinent = (e) => {
    dispatch(filterCountriesByContinenet(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
  };
  return (
    <div>
      <select
        className={Styles.container}
        onChange={(e) => handlefilterContinent(e)}
      >
        <option selected="true" disabled="disabled">
          By Continent
        </option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
    </div>
  );
};

export default FilterByContinent;
