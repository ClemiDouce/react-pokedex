import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "bulma/css/bulma.min.css";
import PokemonCard from "./PokemonCard";
import Modal from "./Modal";
const pokemons = require("../datas/pokemon.json");

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalPokemon, setModalPokemon] = useState({
    name: "",
    sprite: "",
    description: "",
  });
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
    setModalPokemon(pokemonData[id]);
    setIsModal(true);
  };

  const onCloseClick = (event) => {
    setIsModal(false);
  };

  useEffect(() => {
    getPokemonData();
  }, []);
  const active = isModal ? "is-active" : "";

  return (
    <div>
      <Modal
        modalPokemon={modalPokemon}
        active={active}
        onCloseClick={onCloseClick}
      />
      <div className="grid">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard
            key={index}
            index={index}
            pokemon={pokemon}
            onCardClick={onCardClick}
            langage="chinese"
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
