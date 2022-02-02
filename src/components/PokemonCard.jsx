import React from "react";
import "../styles/pokemon-card.css";

function PokemonCard({ index, pokemon, onCardClick, language }) {
  return (
    <div className="pokemon-card card" onClick={(e) => onCardClick(e, index)}>
      <img className="" src={pokemon.sprite} alt="" />
      <h2 className="">
        {language ? pokemon.name[language] : pokemon.name.french}
      </h2>
    </div>
  );
}

export default PokemonCard;
