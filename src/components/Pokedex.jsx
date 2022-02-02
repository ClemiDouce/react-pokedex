import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "../styles/pokedex.css";
const pokemons = require("../datas/pokemon.json");

function Pokedex({ language, search }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemonData, setFilterPokemonData] = useState([]);

  useEffect(() => {
    if (search === "") {
      return;
    }
    let searchedPokemon = pokemonData.filter((item, index, array) => {
      return item.name[language].toLowerCase().includes(search.toLowerCase());
    });
    setFilterPokemonData(searchedPokemon);
  }, [search]);

  const getPokemonData = () => {
    for (let i = 0; i < 151; i++) {
      let pokemon = pokemons[i];
      setPokemonData((prev_state) =>
        prev_state.concat({
          id: pokemon.id,
          name: pokemon.name,
          type: pokemon.type,
          stats: pokemon.base,
          sprite: require(`../datas/sprites/${String(pokemon.id).padStart(
            3,
            "0"
          )}MS.png`),
        })
      );
    }
  };

  const onCardClick = (event, id) => {
    console.log(id);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  let cards;

  if (search === "") {
    cards = (
      <div className="pokedex-grid">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard
            key={index}
            index={index}
            pokemon={pokemon}
            onCardClick={onCardClick}
            language={language}
          />
        ))}
      </div>
    );
  } else if (filteredPokemonData.length > 0) {
    cards = (
      <div className="pokedex-grid">
        {filteredPokemonData.length > 0 &&
          filteredPokemonData.map((pokemon, index) => (
            <PokemonCard
              key={index}
              index={index}
              pokemon={pokemon}
              onCardClick={onCardClick}
              language={language}
            />
          ))}
      </div>
    );
  } else {
    cards = <h3>Pas de resultat</h3>;
  }

  return <div className="">{cards}</div>;
}

export default Pokedex;
