import React from "react";
import "./Sidebar.css";
import yulduz from '../assets/Star.png';
import like from '../assets/Heart.png';
import time from '../assets/Time.png';
import { useTranslation } from "react-i18next";  // Importing useTranslation hook

function Sidebar() {
  const { t } = useTranslation();  // Using useTranslation hook to access translation function

  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-container">
          <p className="sidebar-text">
            {t("sidebar_description")}
          </p>
        </div>
        <div className="sidebar-navbares">
          <h1 className="sidebar-title">{t("sidebar_values_title")}</h1>
          <ul className="sidebar-navbar">
            <li className="sidebar-navbar-list">
                <img src={yulduz} alt="yulduz" width={96} height={96} />
                <h2 className="sidebar-navbar-list-title">
                  {t("quality_title")}
                </h2>
                <p className="sidebar-navbar-list-text">
                  {t("quality_description")}
                </p>
            </li>
            <li className="sidebar-navbar-list">
                <img src={like} alt="like" width={96} height={96} />
                <h2 className="sidebar-navbar-list-title">
                  {t("comfort_title")}
                </h2>
                <p className="sidebar-navbar-list-text">
                  {t("comfort_description")}
                </p>
            </li>
            <li className="sidebar-navbar-list">
                <img src={time} alt="time" width={96} height={96} />
                <h2 className="sidebar-navbar-list-title">
                  {t("delivery_title")}
                </h2>
                <p className="sidebar-navbar-list-text">
                  {t("delivery_description")}
                </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
