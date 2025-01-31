import React from "react";
import "./About.css";
import imagesabout from "../assets/matrasabout.png";
import imagesaboutes from "../assets/aboutmainimg.png";
import images11  from '../assets/aboutmainimg1.png'

function Aboutmain() {
  return (
    <div>
      <div className="aboutmain">
        <div className="aboutmain-container">
        <div className="aboutmain-list">
          <img src={images11} alt="matras" className="aboutmain-img" />
          <div className="aboutmain-listes">
            <h2 className="aboutmain-listes-title">Bizning tariximiz</h2>
            <p className="aboutmain-listes-text">
              WestMatresda biz yaxshi tun uyqusi ajoyib kunning asosi ekanligiga
              ishonamiz. Shuning uchun biz o’zgacha qulaylik va
              qo’llab-quvvatlashni ta’minlaydigan yuqori sifatli matraslar va
              yotoqxona anjomlarini ishlab chiqarishga bag’ishlanganmiz. Biz
              shunchaki mahsulot sotmayapmiz; biz sizning farovonligingizga
              sarmoya kirityapmiz.
            </p>
          </div>
        </div>
          
        </div>
        <img src={imagesaboutes} alt="images" className="aboutmain-images" />
       
      </div>
    </div>
  );
}

export default Aboutmain;
