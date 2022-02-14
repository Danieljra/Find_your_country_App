import React from "react";
import { Link } from "react-router-dom";
import Styles from "./landing.module.css";
const LandingPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <h1>Discover the countries of the world</h1>
        <h2>choose one and travel!</h2>
      </div>
      <div>
        <Link to="/home">
          <button className={Styles.button}>
            <span class={Styles.shadow}></span>
            <span class={Styles.edge}></span>
            <span class={`${Styles.front} ${Styles.text}`}>Find one</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
