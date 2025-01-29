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
          <Link to="/product" className="detailse-linkes">Mahsulotlar /</Link>
          <Link  className="detailse-linkes">Mahsulotlar oynasi</Link>
          <p className="details-title-text">HYBRID</p>
          <h1 className="details-title">{product.title}</h1>
          <p className="detailse-texttes">italiyancha uyqu baxti</p>
          <button className="deatilsebtnjon">08 qatlam</button>
          <button className="deatilsebtnjon-one">O'rtacha yumshoqlik</button>
          <p className="detailse-texttes">Matrasning kerakli razmerini tanlang</p>
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
          <p className="detailse-textes"><LiaFlagUsaSolid size={20} color="red" /> Made in USA</p>
          <p className="detailse-textes"><FaShieldAlt size={20} color="green" /> Garantiya Shartnomasi</p>
          <p className="detailse-textes"><FaTruck size={20} color="blue" /> Toshkent bo'ylab 3-7 kun ichida yetkazib beramiz</p>

          <p className="detail-text">{product.label}</p>
          <ul>
            <li><p className="details-list-text">{product.text}</p></li>
            <li><p className="details-list-text">{product.textes}</p></li>
          </ul>
        </div>
        <div className="details-images">
          <img src={product.img1} alt={`${product.title} img1`} className="details-img1" />
          <img src={product.img2} alt={`${product.title} img2`} className="details-img2" />
          <img src={product.img3} alt={`${product.title} img3`} className="details-img3" />
        </div>
      </div>

      {/* **O'xshash mahsulotlar bo'limi** */}
      {filteredProducts.length > 0 && (
       <div className="related-products">
       <h2 className="related-title">O'xshash mahsulotlar</h2>
       <div className="swiper-container">
         <Swiper
         loop={true}
           spaceBetween={20}
           slidesPerView={3}
           navigation={{
             nextEl: ".custom-swiper-button-next",
             prevEl: ".custom-swiper-button-prev",
           }}
           modules={[Navigation]}
           className="related-swiper"
         >
           {filteredProducts.map((item) => (
             <SwiperSlide key={item.id} style={{ zIndex: -1 }}>

               <div
                 className="section-navbares-list"
                 style={{ backgroundImage: `url(${item.img1})` }}
               >
                 <p className="section-navbares-list-title">{item.title}</p>
                 <b className="section-navbares-list-text">{item.price}</b>
                 <br />
                 <button className="section-navbares-list-btn">Xususiyat 1</button>
                 <button className="section-navbares-list-btn">Xususiyat 2</button>
                 <button
                   className="section-navbares-list-btnes"
                   onClick={() => (window.location.href = `/details/${item.id}`)}
                 >
                   Batafsil
                 </button>
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
