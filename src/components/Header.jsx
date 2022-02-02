import { React } from "react";
import "../styles/header.css";

function Header({ onSelectChange }) {
  return (
    <div className="header has-background-primary">
      <div className="heading">
        <p className="title has-text-light is-1">Pokedex</p>
        <p className="subtitle is-6">Made with react</p>
      </div>
      <div className="select">
        <select defaultValue="french" onChange={onSelectChange}>
          <option value="french">French</option>
          <option value="english">English</option>
          <option value="chinese">Chinese</option>
          <option value="japanese">Japanese</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
