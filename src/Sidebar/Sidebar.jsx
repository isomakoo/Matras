import React from "react";
import "./Sidebar.css";
import yulduz from '../assets/Star.png'
import like from '../assets/Heart.png'
import time from '../assets/Time.png'

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-container">
          <p className="sidebar-text">
            Biz sifatli matras ishlab chiqarishga ixtisoslashgan Westmatres
            kompaniyasimiz. Bizning vazifamiz hamma uchun qulay uyquni
            ta'minlashdir. Siz uchun mukammal matras yaratish uchun biz faqat
            eng yaxshi materiallar va zamonaviy texnologiyalardan foydalanamiz!
          </p>
        </div>
        <div className="sidebar-navbares">
          <h1 className="sidebar-title">Qadriyatlarimiz</h1>
          <ul className="sidebar-navbar">
            <li className="sidebar-navbar-list">
                <img src={yulduz} alt="yulduz" width={96} height={96} />
                <h2 className="sidebar-navbar-list-title">
                Yuqori sifat
                </h2>
                <p className="sidebar-navbar-list-text">
                Biz yuqori sifatli uyquni ta'minlash uchun matraslarimizni yaratish jarayonida faqat eng yaxshi materiallardan foydalanamiz.
                </p>
            </li>
            <li className="sidebar-navbar-list">
                <img src={like} alt="yulduz" width={96} height={96} />
                <h2 className="sidebar-navbar-list-title">
                Qulay komfort
                </h2>
                <p className="sidebar-navbar-list-text">
                Bizning matraslarimiz maksimal qulaylik va qulaylikni ta'minlash uchun mijozlarning barcha ehtiyojlarini qondirishga qaratilgan.
                </p>
            </li>
            <li className="sidebar-navbar-list">
                <img src={time} alt="yulduz" width={96} height={96} />
                <h2 className="sidebar-navbar-list-title">
                Tezkor yetkazib berish
                </h2>
                <p className="sidebar-navbar-list-text">
                Biz matraslarni to‘g‘ridan-to‘g‘ri sizga 1 ishchi kunida yetkazib berishni kafolatlaymiz
                </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
