import React, { useState } from "react";
import { matraslar } from "./matraslar";
import { topperlar } from "./topperlar";
import image111 from '../assets/images1111.png'
import { kurpalar } from "./kurpalar";
import "./Section.css";

function Section() {
  const [selectedCategory, setSelectedCategory] = useState("Matraslar");
  const [data, setData] = useState(matraslar);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === "Matraslar") {
      setData(matraslar);
    } else if (category === "Topperlar") {
      setData(topperlar);
    } else if (category === "Kurpalar") {
      setData(kurpalar);
    }
  };

  // Sahifalash uchun
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Kategoriyaga bog‘liq fon rasmi
  const getCategoryImage = () => {
    if (selectedCategory === "Matraslar") return matraslar[0]?.img1;
    if (selectedCategory === "Topperlar") return topperlar[0]?.img1;
    if (selectedCategory === "Kurpalar") return kurpalar[0]?.img1;
    return "";
  };

  return (
    <div className="section">
      <div className="section-container">
        <nav className="section-btn-list">
          {["Matraslar", "Topperlar", "Kurpalar"].map((category) => (
            <button
              key={category}
              className={`section-btnes ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
              style={{
                backgroundImage: selectedCategory === category ? `url(${image111})` : "none",
                backgroundColor: selectedCategory !== category ? "#007BFF" : "transparent",
                color: selectedCategory !== category ? "white" : "black",
              }}
            >
              {category}
            </button>
          ))}
        </nav>

        <ul className="section-navbares">
          {paginatedData.map((product) => (
            <li
              key={product.id}
              className="section-navbares-list"
              style={{ backgroundImage: `url(${product.img1})` }}
            >
              <p className="section-navbares-list-title">{product.title}</p>
              <b className="section-navbares-list-text">{product.price}</b>
              <br />
              <button className="section-navbares-list-btn">Xususiyat 1</button>
              <button className="section-navbares-list-btn">Xususiyat 2</button>
              <button
                className="section-navbares-list-btnes"
                onClick={() => (window.location.href = `/details/${product.id}`)}
              >
                Batafsil
              </button>
            </li>
          ))}
        </ul>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
