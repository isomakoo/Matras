import React from "react";
import "./About.css";
import logoabtt from '../assets/Frame 144.svg';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";  // Importing useTranslation hook

function Aboutheader() {
  const { t } = useTranslation();  // Using useTranslation hook to access translation function
  const navigate = useNavigate();

  const handlematras = () => {
    window.location.href = '/product';
  };

  return (
    <>
      <div className="Aboutheader">
        <div className="About-container">
          <div className="Aboutheader-list">
            <h1 className="Aboutheader-title">{t("about_title")}</h1>  {/* Translation for title */}
            <p className="Aboutheader-text">{t("about_subtitle")}</p>  {/* Translation for subtitle */}
            <p className="Aboutheader-textes">{t("about_description")}</p>  {/* Translation for description */}
            <button className="Aboutheader-btnes" onClick={handlematras}>{t("view_mattresses")}</button>  {/* Translation for button */}
          </div>
          <img src={logoabtt} alt="rasm" className="aboutheader-img" />
        </div>
      </div>
    </>
  );
}

export default Aboutheader;
