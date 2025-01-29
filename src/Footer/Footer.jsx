import React from "react";
import "./Footer.css";
import logo4 from "../assets/Logo (5).png";
import west from "../assets/WestMatres (1).png";
import phone from '../assets/phone.png';
import telegram from '../assets/Telegram.png'
import instagram from '../assets/instagram (1).png'
import email from '../assets/garden_email-stroke-16.png'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-hero">
          <img src={logo4} alt="" className="footer-logo" />
          <div className="footer-navbar">
            <img src={west} alt="logo" />
            <p className="footer-navbar-text">
              Biz sifatli matras ishlab chiqarishga ixtisoslashgan Westmatres
              kompaniyasimiz. Bizning vazifamiz hamma uchun qulay uyquni
              ta'minlashdir. Siz uchun mukammal matras yaratish uchun biz faqat
              eng yaxshi materiallar va zamonaviy texnologiyalardan
              foydalanamiz!
            </p>
          </div>
          </div>
          <ul className="footer-listes">
            <li className="footer-listes-navbar">
              <Link to='/home' className="footer-listes-link" >Home</Link>
            </li>
            <li className="footer-listes-navbar">
              <Link to='/about' className="footer-listes-link" >About us</Link>
            </li>
            <li className="footer-listes-navbar">
              <Link to='/product' className="footer-listes-link" >Product</Link>
            </li>
            <li className="footer-listes-navbar">
              <Link to='/contact' className="footer-listes-link" >Contact us</Link>
            </li>
            <li className="footer-listes-navbar">
              <Link to='/faq'  className="footer-listes-link" >Faq</Link>
            </li>
          </ul>
          <div className="footer-linkes">
                    <span className="footer-linkeses">
                      <a href="tel:+998 78 333 79 79" className="footer-link">+998 78 333 79 79</a> <br />
                      <a href="tel:+998 78 333 79 79" className="footer-link">+998 78 333 79 79</a>
                      <img src={phone} alt="" className="footer-img"/>
                    </span> <br />
                    <a href="https://t.me/kurbonov_me" className="footer-link">westmatres <img src={instagram} alt="instagram"  className='footer-images' /></a> <br />
                    <a href="https://t.me/kurbonov_me" className="footer-link">westmatres_uz <img src={telegram} alt="telegram" className='footer-images'  /></a> <br />
                    <a href="https://t.me/kurbonov_me" className="footer-link">support@westmatres.com<img src={email} alt="email" className="footer-images"  /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
