import React from "react";
import { useState } from "react";
import { searchByName } from "../../actions";
import { useDispatch } from "react-redux";
import Styles from "./searchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByName(name));
    setName("");
  };

  return (
    <div className={Styles.SearchBar}>
      <input
        onChange={(e) => handleInputChange(e)}
        type="search"
        value={name}
        placeholder="Search any country..."
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //class="icon icon-tabler icon-tabler-search"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
