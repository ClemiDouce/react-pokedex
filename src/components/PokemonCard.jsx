import React from "react";

function PokemonCard({ index, pokemon, onCardClick, langage }) {
  return (
    <div className="box pokemon-card" onClick={(e) => onCardClick(e, index)}>
      <img src={pokemon.sprite} alt="" />
      {/* <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2> */}
      <h2>{langage ? pokemon.name[langage] : pokemon.name.french}</h2>
    </div>
  );
}

export default PokemonCard;