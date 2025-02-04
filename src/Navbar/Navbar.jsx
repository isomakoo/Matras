import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo1 from "../assets/Logo (5).png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/product");
  };

  const handleBog = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div className="Navbar">
        <div className="Navbar-container">
          <nav className="navbar-nav">
            <img src={logo1} alt="logo" className="navbar-logo" />
            <h1 className="navbar-title">WestMatras</h1>
          </nav>
          <p className="navbar-text">{t("navbar.slogan")}</p>
          <p className="navbar-textes">{t("navbar.description")}</p>
          <button className="navbar-btn" onClick={handleChange}>
            {t("navbar.mattresses")}
          </button>
          <button className="navbar-btnes" onClick={handleBog}>
            {t("navbar.contact")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
