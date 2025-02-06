import React, { useState, useEffect } from "react";
import { matraslar } from "./matraslar";
import { topperlar } from "./topperlar";
import { kurpalar } from "./kurpalar";
import "./Section.css";

function Section() {
  const [selectedCategory, setSelectedCategory] = useState("Matraslar");
  const [data, setData] = useState(matraslar);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9); // Boshlang‘ich qiymat

  // Ekran o'lchami bo'yicha sahifada elementlar sonini aniqlash
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setItemsPerPage(4); // 500px dan kichik bo‘lsa, 4 ta element
      } else if (window.innerWidth <= 900) {
        setItemsPerPage(8); // 900px uchun ham 4 ta element, lekin 2 ustun
      } else {
        setItemsPerPage(9); // Katta ekran uchun 9 ta element
      }
    };

    handleResize(); // Boshlang‘ich yuklashda o‘lchamni tekshirish
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <div className="section">
      <div className="section-container">
        <nav className="section-btn-list">
          {["Matraslar", "Topperlar", "Kurpalar"].map((category) => (
            <button
              key={category}
              className={`section-btnes ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
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
              style={{
                background: `linear-gradient(180deg, rgba(2, 3, 27, 0) 0%, #041444 100%), url(${product.img1})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
              }}
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
              <p className="section-product-siz">{product.size}</p>
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
