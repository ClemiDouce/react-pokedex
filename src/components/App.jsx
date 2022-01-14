import { React, useState } from "react";
import Header from "./Header";
import Pokedex from "./Pokedex";

function App() {
  const [displayLangage, setDisplayLangage] = useState("french");

  const onLangageChange = (event) => {
    setDisplayLangage(event.target.value);
  };

  return (
    <div>
      <Header onSelectChange={onLangageChange} />
      <Pokedex language={displayLangage} />
    </div>
  );
}

export default App;
