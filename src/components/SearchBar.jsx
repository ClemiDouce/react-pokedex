import React, { useState } from "react";
import "../styles/searchbar.css";

const SearchBar = ({ onSearchChange, search }) => {
  return (
    <form action="">
      <input
        className="input is-rounded is-large"
        type="text"
        placeholder="Search Pokemon"
        onChange={onSearchChange}
        value={search}
      ></input>
    </form>
  );
};

export default SearchBar;
