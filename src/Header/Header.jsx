import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import "./Header.css";
import logo1 from "../assets/Logo.svg";
import uz from "../assets/language.png";
import ru from "../assets/language.png";
import eng from "../assets/language.png";
import btn from '../assets/Vector.png'
import logos from '../assets/Logo (7).png'

function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Tilni localStorage'dan o'qish va o'rnatish
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang); // localStorage'dan o'qilgan tilni o'rnatish
    }
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Tilni o‘zgartirish
    localStorage.setItem('lang', lang); // Tanlangan tilni localStorage'ga saqlash
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const selectedLang = i18n.language;

  return (
    <div className="header">
      <div className="header-container">
      <button className="header-btn" onClick={() => setIsModalOpen(true)}>
          <img src={btn} alt="btn" />
        </button>
        <img src={logo1} alt="logo" className="header-logo" />
        <ul className="header-list">
          <li className="header-listes">
            <Link to="/home" className="header-link">{t("home")}</Link>
          </li>
          <li className="header-listes">
            <Link to="/about" className="header-link">{t("about")}</Link>
          </li>
          <li className="header-listes">
            <Link to="/product" className="header-link">{t("product")}</Link>
          </li>
          <li className="header-listes">
            <Link to="/contact" className="header-link">{t("contact")}</Link>
          </li>
          <li className="header-listes">
            <Link to="/faq" className="header-link">{t("faq")}</Link>
          </li>
        </ul>

        {/* Til tanlash dropdown */}
        <div className="language-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img
            src={selectedLang === "uz" ? uz : selectedLang === "ru" ? ru : eng}
            alt="Selected Language"
            width={20}
            height={20}
          />
          <span>{selectedLang === "uz" ? "Uzbek" : selectedLang === "ru" ? "Russian" : "English"}</span>
          {isDropdownOpen && (
            <div className="dropdown-options">
              <div onClick={() => handleLanguageChange("uz")} className="dropdown-option">
                Uzbek
              </div>
              <div onClick={() => handleLanguageChange("ru")} className="dropdown-option">
              
                Russian
              </div>
              <div onClick={() => handleLanguageChange("en")} className="dropdown-option">
                English
              </div>
            </div>
          )}
        </div>

        {/* Menu ochuvchi tugma */}
        
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
           <img src={logos} alt="WEST mASTER" width={133} height={21}/>
          <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>
          <ul className="modal-list">
            <li><Link to="/home" className="modal-link" onClick={() => setIsModalOpen(false)}>{t("home")}</Link></li>
            <li><Link to="/about"className="modal-link" onClick={() => setIsModalOpen(false)}>{t("about")}</Link></li>
            <li><Link to="/product" className="modal-link" onClick={() => setIsModalOpen(false)}>{t("product")}</Link></li>
            <li><Link to="/contact" className="modal-link" onClick={() => setIsModalOpen(false)}>{t("contact")}</Link></li>
            <li><Link to="/faq" className="modal-link" onClick={() => setIsModalOpen(false)}>{t("faq")}</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
