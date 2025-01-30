import React, { useState, useEffect } from "react";
import "./Header.css";
import logo1 from "../assets/Logo (4).png";
import uz from "../assets/UZ.png";
import ru from "../assets/RU.png";
import eng from "../assets/GB.png";
import { MdOutlineMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [selectedLang, setSelectedLang] = useState("uz");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // To track the current route

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <div className="header">
        <div className="header-container">
          <img src={logo1} alt="logo" className="header-logo" />
          <ul className="header-list">
            <li className="header-listes">
              <Link to="/home" className="header-link">Home</Link>
            </li>
            <li className="header-listes">
              <Link to="/about" className="header-link">About us</Link>
            </li>
            <li className="header-listes">
              <Link to="/product" className="header-link">Product</Link>
            </li>
            <li className="header-listes">
              <Link to="/contact" className="header-link">Contact us</Link>
            </li>
            <li className="header-listes">
              <Link to="/faq" className="header-link">FAQ</Link>
            </li>
          </ul>

          {/* Custom language dropdown */}
          <div className="language-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img
              src={selectedLang === "uz" ? uz : selectedLang === "ru" ? ru : eng}
              alt="Selected Language"
              width={20}
              height={15}
            />
            <span>{selectedLang === "uz" ? "Uzbek" : selectedLang === "ru" ? "Russian" : "English"}</span>
            {isDropdownOpen && (
              <div className="dropdown-options">
                <div onClick={() => handleLanguageChange("uz")} className="dropdown-option">
                  <img src={uz} alt="Uzbek Flag" width={20} height={15} />
                  Uzbek
                </div>
                <div onClick={() => handleLanguageChange("ru")} className="dropdown-option">
                  <img src={ru} alt="Russian Flag" width={20} height={15} />
                  Russian
                </div>
                <div onClick={() => handleLanguageChange("en")} className="dropdown-option">
                  <img src={eng} alt="English Flag" width={20} height={15} />
                  English
                </div>
              </div>
            )}
          </div>
          <button className="header-btn"><MdOutlineMenu width='40px' color="white"/></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
