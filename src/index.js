import React from "react";
import ReactDOM from "react-dom";
import Pokedex from "./components/Pokedex";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Pokedex />
  </React.StrictMode>,
  document.getElementById("root")
);
