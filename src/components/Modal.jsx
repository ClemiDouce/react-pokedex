import React from "react";

function Modal({ modalPokemon, active, onCloseClick }) {
  return (
    <div className={`modal ${active}`}>
      <div className="modal-background" onClick={onCloseClick}></div>
      <div className="modal-content">
        <div className="box">
          <img src={modalPokemon.sprite} alt="pokemonSprite" />
          <h2>{modalPokemon.name.french}</h2>
          <p>{modalPokemon.description}</p>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onCloseClick}
      ></button>
    </div>
  );
}

export default Modal;
