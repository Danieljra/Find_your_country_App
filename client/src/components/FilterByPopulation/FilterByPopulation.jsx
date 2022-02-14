import React from "react";
import { useDispatch } from "react-redux";
import { filterCountriesByPopulation } from "../../actions";
import Styles from "./FilterByPopulation.module.css";
const FilterByPopulation = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(filterCountriesByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
  };

  return (
    <div>
      <select className={Styles.container} onChange={(e) => handleClick(e)}>
        <option selected="true" disabled="disabled">
          By Population
        </option>
        <option value="Lowest">Lowest</option>
        <option value="Highest">Highest</option>
      </select>
    </div>
  );
};

export default FilterByPopulation;
