import React from "react";
import { Link } from "react-router-dom";
import Styles from "./ButtonCreateActivity.module.css";
const ButtonCreateActivity = () => {
  return (
    <div>
      <Link to="/createActivity">
        <button className={Styles.button}>
          <span class={Styles.shadow}></span>
          <span class={Styles.edge}></span>
          <span class={`${Styles.front} ${Styles.text}`}>
            Create a tourist activity
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ButtonCreateActivity;
