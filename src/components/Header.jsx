import { React } from "react";

function Header({ onSelectChange }) {
  return (
    <div>
      <h1>Pokedex</h1>
      <select name="languages" id="languages-select" onChange={onSelectChange}>
        <option value="french">French</option>
        <option value="english">English</option>
        <option value="chinese">Chinese</option>
        <option value="japanese">Japanese</option>
      </select>
    </div>
  );
}

export default Header;
