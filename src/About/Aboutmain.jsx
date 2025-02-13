import React from "react";
import "./About.css";
import imagesabout from "../assets/matrasabout.png";
import imagesaboutes from "../assets/aboutmainimg.png";
import images11  from '../assets/Galery (4).png';
import { useTranslation } from "react-i18next";  // Importing useTranslation hook

function Aboutmain() {
  const { t } = useTranslation();  // Using useTranslation hook to access translation function

  return (
    <div>
      <div className="aboutmain">
        <div className="aboutmain-container">
          <div className="aboutmain-list">
            <img src={images11} alt="matras" className="aboutmain-img" />
            <div className="aboutmain-listes">
              <h2 className="aboutmain-listes-title">{t("about_history_title")}</h2>  {/* Translated title */}
              <p className="aboutmain-listes-text">{t("about_history_description")}</p>  {/* Translated description */}
            </div>
          </div>
        </div>
        <img src={imagesaboutes} alt="images" className="aboutmain-images" />
      </div>
    </div>
  );
}

export default Aboutmain;
