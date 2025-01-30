import React from "react";
import "./Navbar.css";
import logo1 from "../assets/Logo (5).png";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate= useNavigate()
   const handlechange=()=>{
    window.location.href = '/product'
   }
   const handlebog=()=>{
    window.location.href = '/contact'
   }
  return (
    <div>
      <div className="Navbar">
        <div className="Navbar-container">
           <nav className="navbar-nav">
           <img src={logo1} alt="logo" className="navbar-logo" />
          <h1 className="navbar-title">WestMatras</h1>
           </nav>
          <p className="navbar-text">
            Sizning qulayligingiz - bizning zimmamizda
          </p>
          <p className="navbar-textes">
            Yetkazib berishni toliq o’z zimmamizga olamiz. Ideal uyqu uchun
            yaratilgan matraslar o’z egalarini kutmoqda. WestMatres har bir
            mahsulot uchun sifat kafolatini ta’minlaydi.
          </p>
          <button className="navbar-btn" onClick={handlechange}>Matraslar</button>
          <button className="navbar-btnes" onClick={handlebog}>Bog'lanish</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
