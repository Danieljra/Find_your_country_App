import React from "react";
import Styles from "./ButtonReloadCountries.module.css";

const ButtonReloadCountries = ({ handleClick }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
        className={Styles.button}
      >
        <span class={Styles.shadow}></span>
        <span class={Styles.edge}></span>
        <span class={`${Styles.front} ${Styles.text}`}>
          Reload all countries
        </span>
      </button>
    </div>
  );
};

export default ButtonReloadCountries;
