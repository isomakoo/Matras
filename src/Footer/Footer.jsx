import React from "react";
import "./Footer.css";
import logo4 from "../assets/Frame 133.png";
import west from "../assets/WestMatres (1).png";
import phone from '../assets/phone.png';
import telegram from '../assets/Telegram.png';
import instagram from '../assets/instagram (1).png';
import email from '../assets/garden_email-stroke-16.png';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";  // Importing useTranslation hook

function Footer() {
  const { t } = useTranslation();  // Using useTranslation hook to access translation function

  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-hero">
            <img src={logo4} alt="" className="footer-logo" /> 
              <p className="footer-navbar-text">
                {t("footer_description")}
              </p>
           
          </div>
          <ul className="footer-listes">
            <li className="footer-listes-navbar">
              <Link to='/home' className="footer-listes-link">
                <p className="footer-link-text">{t("footer-home")}</p>
              </Link>
            </li>
            <li className="footer-listes-navbar">
              <Link to='/about' className="footer-listes-link">
                <p className="footer-link-text">{t("about_us")}</p>
              </Link>
            </li>
            <li className="footer-listes-navbar">
              <Link to='/product' className="footer-listes-link">
                <p className="footer-link-text">{t("footer-product")}</p>
              </Link>
            </li>
            <li className="footer-listes-navbar">
              <Link to='/contact' className="footer-listes-link">
                <p className="footer-link-text">{t("contact_us")}</p>
              </Link>
            </li>
            <li className="footer-listes-navbar">
              <Link to='/faq' className="footer-listes-link">
                <p className="footer-link-text">{t("footer-faq")}</p>
              </Link>
            </li>
          </ul>
          <div className="footer-linkes">
            <span className="footer-linkeses">
              <nav className="footer-nav">
                <a href="tel:+998783337979" className="footer-link-nav">+998 78 333 79 79</a> <br />
                <a href="tel:+998783337979" className="footer-link-nav">+998 78 840 79 79</a>
              </nav>
              <img src={phone} alt="" className="footer-img" />
            </span> <br />
            <a href="https://t.me/westmatres_uz" className="footer-link">
              westmatres <img src={instagram} alt="instagram" className='footer-images' />
            </a> <br />
            <a href="https://t.me/westmatres_uz" className="footer-link">
              westmatres_uz <img src={telegram} alt="telegram" className='footer-images' />
            </a> <br />
            <a href="mailto:@westmatres.com" className="footer-link">
              support@westmatres.com <img src={email} alt="email" className="footer-images" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
