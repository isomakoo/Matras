import React from "react";
import "./Main.css";
import matras from "../assets/galery.png";

function Main() {
  return (
    <div>
      <div className="Main">
        <div className="Main-container">
          <h1 className="main-title">A’lo uyqu kafolati</h1>
          <p className="main-titles">
            Sizning qulayligingiz - bizning mas’uliyatimiz
          </p>
          <p className="main-text">
            Yetkazib berishni toliq o’z zimmamizga olamiz. Ideal uyqu uchun
            yaratilgan matraslar o’z egalarini kutmoqda. WestMatres har bir
            mahsulot uchun sifat kafolatini ta’minlaydi.
          </p>
        </div>
        <img src={matras} alt="matras" width={"100%"} className="main-images" />
      </div>
      <div className="main-section">
        <h1 className="main-section-title">Bizning mahsulotlarimiz</h1>
        <p className="main-section-text">
          Bizning vazifamiz hamma uchun qulay uyquni ta'minlashdir. Siz uchun
          mukammal matras yaratish uchun biz faqat eng yaxshi materiallar va
          zamonaviy texnologiyalardan foydalanamiz!
        </p>
      </div>
    </div>
  );
}

export default Main;
