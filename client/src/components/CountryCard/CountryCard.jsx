import Styles from "./CountryCard.module.css";
import React from "react";
import { Link } from "react-router-dom";
const CountryCard = ({ name, flagImage, continent, id }) => {
  return (
    <Link to={"/home/" + id} className={Styles.Link}>
      <div className={Styles.Card}>
        <img src={flagImage} alt="img not found" width="200px" height="250px" />
        <p className={Styles.name}>{name}</p>
        <p className={Styles.continent}>{"Continent: " + continent}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
