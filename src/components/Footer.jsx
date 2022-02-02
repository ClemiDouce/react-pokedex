import React from "react";
import logo from "../datas/clementine_logo.png";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer has-background-primary-dark">
      <img src={logo} alt="clem_logo" />
    </div>
  );
}

export default Footer;
