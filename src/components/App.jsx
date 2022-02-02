import { React, useState } from "react";
import Header from "./Header";
import Pokedex from "./Pokedex";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

function App() {
  const [displayLangage, setDisplayLangage] = useState("french");
  const [search, setSearch] = useState("");

  const onLangageChange = (event) => {
    setDisplayLangage(event.target.value);
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="app">
      <Header onSelectChange={onLangageChange} />
      <SearchBar onSearchChange={onSearchChange} search={search} />
      <Pokedex language={displayLangage} search={search} />
      <Footer />
    </div>
  );
}

export default App;
