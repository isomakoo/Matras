import React from "react";
import "./About.css";
import logoabtt from '../assets/logoabt.png'
import { useNavigate } from "react-router-dom";

function Aboutheader() {
  const navigater=useNavigate()
  const handlematras=()=>{
    window.location.href = '/product'
  }
  return (
    <>
      <div className="Aboutheader">
        <div className="About-container">
          <div className="Aboutheader-list">
          <h1 className="Aboutheader-title">Biz  haqimizda</h1>
          <p className="Aboutheader-text">
            Sizning Qulayligingiz, Bizning Mahoratimiz
          </p>
          <p className="Aboutheader-textes">
            WestMatresda biz yaxshi tun uyqusi ajoyib kunning asosi ekanligiga
            ishonamiz. Shuning uchun biz o’zimizni o’zgacha qulaylik va
            qo’llab-quvvatlashni ta’minlaydigan yuqori sifatli matraslar va
            yotoqxona anjomlarini ishlab chiqarishga bag’ishlaganmiz.
          </p>
          <button className="Aboutheader-btnes" onClick={handlematras}>Matraslarni ko’rish</button>
          </div>
          <img src={logoabtt} alt="rasm"  className="aboutheader-img"/>
        </div>
      </div>
    </>
  );
}

export default Aboutheader;
