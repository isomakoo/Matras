import React from "react";
import "./About.css";
import images12 from "../assets/aboutsidebar.png";
import { useTranslation } from "react-i18next";  // Importing useTranslation hook

function Aboutsidebar() {
  const { t } = useTranslation();  // Using useTranslation hook to access translation function

  return (
    <div className="aboutsidebar-navbar">
      <h1 className="aboutsidebar-navbar-title">{t("offer_title")}</h1>  {/* Translated title */}
      <p className="aboutsidebar-navbar-text">{t("offer_description")}</p>  {/* Translated description */}
    </div>
  );
}

export default Aboutsidebar;
