import React from "react";
import Styles from "./paging.module.css";
const Paging = ({ countriesPerPage, loadedCountries, paging }) => {
  const Numbers = [];
  for (let i = 0; i <= Math.ceil(loadedCountries / countriesPerPage); i++) {
    Numbers.push(i + 1);
  }

  //console.log(Numbers);
  return (
    <nav>
      <ul className={Styles.paging}>
        {Numbers &&
          Numbers.map((numberOfpage) => {
            return (
              <li className={Styles.numbers} key={numberOfpage}>
                <button
                  className={Styles.button}
                  onClick={() => paging(numberOfpage)}
                >
                  {numberOfpage}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Paging;
