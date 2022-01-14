import { React, useState } from "react";
import Header from "./Header";
import Pokedex from "./Pokedex";

function App() {
  const [displayLangage, setDisplayLangage] = useState("french");

  const onLangageChange = (event) => {
    console.log("Salut !");
    console.log("Say something");
    console.log(event.target.value);
  };

  return (
    <div>
      <Header onSelectChange={onLangageChange} />
      <Pokedex />
    </div>
  );
}

export default App;
