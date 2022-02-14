import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActivities } from "../../actions";
import Styles from "./FilterByActivity.module.css";
const FilterByActivity = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);

  const handleSelectChange = (e) => {
    e.preventDefault();
    dispatch(filterActivities(e.target.value));
    setCurrentPage(1);
  };

  return (
    <select
      className={Styles.container}
      onChange={(e) => handleSelectChange(e)}
    >
      <option selected="true" disabled="disabled">
        By Activity
      </option>
      {allActivities.map((act) => {
        return (
          <option value={act.name} key={act.id}>
            {act.name}
          </option>
        );
      })}
    </select>
  );
};

export default FilterByActivity;
