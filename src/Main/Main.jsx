import React from "react";
import "./Main.css";
import matras from "../assets/galery (3).png";
import { useTranslation } from "react-i18next";  // Importing useTranslation hook

function Main() {
  const { t } = useTranslation();  // Using useTranslation hook to access translation function

  return (
    <div>
      <div className="Main">
        <div className="Main-container">
          <h1 className="main-title">{t("excellent_sleep")}</h1>  {/* Translated text */}
          <p className="main-titles">{t("comfort_responsibility")}</p>  {/* Translated text */}
          <p className="main-text">
            {t("delivery_guarantee")} {t("ideal_sleep_matras")} {t("quality_guarantee")}
          </p>
        </div>
        <img src={matras} alt="matras" width={"100%"} className="main-images" />
      </div>
      <div className="main-section">
        <h1 className="main-section-title">{t("our_products")}</h1>  {/* Translated text */}
        <p className="main-section-text">{t("perfect_matras_creation")}</p>  {/* Translated text */}
      </div>
    </div>
  );
}

export default Main;
