import React from "react";
import { alphabeticalOrder } from "../../actions";
import { useDispatch } from "react-redux";
import Styles from "./AlphabeticalFilter.module.css";

const AlphabeticalFilter = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    e.preventDefault();
    dispatch(alphabeticalOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
  };

  return (
    <div>
      <select
        className={Styles.container}
        onChange={(e) => handleSelectChange(e)}
      >
        <option selected="true" disabled="disabled">
          By alphabetical order
        </option>
        <option value="A-->Z">A TO Z</option>
        <option value="Z-->A">Z TO A</option>
      </select>
    </div>
  );
};

export default AlphabeticalFilter;
