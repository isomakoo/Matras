import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "./products";
import "./Details.css";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaShieldAlt, FaTruck } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Detail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Mahsulot topilmadi!</div>;
  }

  // **Aynan shu turkumdagi mahsulotlarni olish**
  const filteredProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  useEffect(() => {
    document.title = "Matras Product Detailse"; // Sahifa sarlavhasini o'zgartirish
  }, []);

  return (
    <div className="details-page">
      <Header />
      <div className="details-container">
        <div className="details-content">
          <Link to="/product" className="detailse-linkes">
            Mahsulotlar /
          </Link>
          <Link className="detailse-linkes">Mahsulotlar oynasi</Link>
          <p className="details-title-text">HYBRID</p>
          <h1 className="details-title">{product.title}</h1>
          <p className="detailse-texttes">italiyancha uyqu baxti</p>
          <button className="deatilsebtnjon">08 qatlam</button>
          <button className="deatilsebtnjon-one">O'rtacha yumshoqlik</button>
          <p className="detailse-texttes">
            Matrasning kerakli razmerini tanlang
          </p>
          <select name="matrasrazmer" id="1" className="detailse-select">
            <option value="1" className="detailse-opt">
              Iktalik Dimensions - 38”W x 75”L x 12”H
            </option>
          </select>

          <hr />
          <b className="detailse-label">
            SUMMA <b className="detailse-label-text">{product.price}</b>
          </b>
          <hr />
          <p className="detailse-textes">
            <LiaFlagUsaSolid size={30} color="black" /> Made in USA
          </p>
          <p className="detailse-textes">
            <FaShieldAlt size={30} color="black" /> Garantiya Shartnomasi
          </p>
          <p className="detailse-textes">
            <FaTruck size={30} color="black" /> Toshkent bo'ylab 3-7 kun ichida
            yetkazib beramiz
          </p>
          <p className="detail-texti">{product.additional1}</p>
          <p className="detail-text">{product.label}</p>
          <ul>
            <li>
              <p className="details-list-text">{product.text}</p>
             
            </li>
            <li>
              <p className="details-list-text">{product.additional2}</p>
            </li>
            <li>
              <p className="details-list-text">{product.textes}</p>
            </li>
          </ul>
        </div>
        <div className="details-images">
          <img
            src={product.img1}
            alt={`${product.title} img1`}
            className="details-img1"
          />
          <img
            src={product.img2}
            alt={`${product.title} img2`}
            className="details-img2"
          />
          <img
            src={product.img3}
            alt={`${product.title} img3`}
            className="details-img3"
          />
           <img
            src={product.img4}
            alt={`${product.title} img2`}
            className="details-img2"
          />
          <img
            src={product.img5}
            alt={`${product.title} img3`}
            className="details-img3"
          />
        </div>
      </div>

     
      {filteredProducts.length > 0 && (
        <div className="related-products">
          <h2 className="related-title">O'xshash mahsulotlar</h2>
          <div className="swiper-container">
          <Swiper
  loop={true}
  height={300}
  spaceBetween={20}
  slidesPerView={3}
  breakpoints={{
    300: {
      slidesPerView: 1, // 500pxdan kichik ekranlarda 1 slayd
    },
    600: {
      slidesPerView: 2, // 500pxdan katta va 800pxdan kichik ekranlarda 2 slayd
    },
    1000: {
      slidesPerView: 3, // 800pxdan katta ekranlarda 3 slayd
    },
  }}
  navigation={{
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  }}
  modules={[Navigation]}
  className="related-swiper"
>
  {filteredProducts.map((item) => (
    <SwiperSlide key={item.id} className="related-swiperslide">
      <div
        className="section-navbares-list"
        style={{
          background: `linear-gradient(180deg, rgba(2, 3, 27, 0) 0%, #041444 100%), url(${item.img1})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}
      >
        <p className="section-navbares-list-title">{item.title}</p>
        {item.price && (
          <b className="section-navbares-list-text">{item.price}</b>
        )}
        <br />
        <button className="section-navbares-list-btn">Xususiyat 1</button>
        <button className="section-navbares-list-btn">Xususiyat 2</button>
        <button
          className="section-navbares-list-btnes"
          onClick={() => (window.location.href = `/details/${item.id}`)}
        >
          Batafsil
        </button>
        <p className="section-product-siz">{item.size}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


<div className="custom-swiper-buttons">
  <div className="custom-swiper-button-prev">❮</div>
  <div className="custom-swiper-button-next">❯</div>
</div>

          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Detail;
