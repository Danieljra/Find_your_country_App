import React from "react";
import Styles from "./CountriesCards.module.css";
import CountryCard from "../CountryCard/CountryCard";
const CountriesCards = ({ currentCountries }) => {
  return (
    <div className={Styles.CountriesCards}>
      {currentCountries.length ? (
        currentCountries.map((c) => {
          return (
            <React.Fragment key={c.id}>
              <CountryCard
                id={c.id}
                name={c.name}
                continent={c.continent}
                flagImage={c.flagImage}
              />
            </React.Fragment>
          );
        })
      ) : (
        <h1 className={Styles.title}>Country Not Found...</h1>
      )}
    </div>
  );
};

export default CountriesCards;
