import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./content.css";
import images3 from '../assets/mijoz1.png';
import mijozfikri from "./mijozlarfikri"; // Import mijozlar ma'lumotlari

function Content() {
  return (
    <div className="content">
      <div className="content-container">
        <h1 className="content-title">Mijozlar fikri</h1>
        <Swiper
          loop={true}
          spaceBetween={60}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-swiper-button-nexte",
            prevEl: ".custom-swiper-button-preve",
          }}
          modules={[Navigation]}
          className="related-swiperes"
          breakpoints={{
            1300: { slidesPerView: 3 },
            1000: { slidesPerView: 3 },
            600: { slidesPerView: 2 },  
            0: { slidesPerView: 1 }, 
          }}
        >
          {mijozfikri.map((mijoz) => (
            <SwiperSlide
            key={mijoz.id}
            style={{
              position: "relative",
              width: "320px",
              height: "500px",
              backgroundImage: `url(${images3})`, // To'g'ri import qilingan rasmni qo'llash
              backgroundSize: "cover",           // Rasmlarni qoplash
              backgroundPosition: "center",      // Rasmlarni o'rtaga joylashtirish
            }}
          >
            {/* Orqa fonda yarim shaffof ko'k rang */}
            <div className="overlay"></div>
          
            {/* Mijoz ma'lumotlari */}
            <div className="content-navbar">
              <img
                src={mijoz.rasmi || images3} // Agar mijoz.rasmi mavjud bo'lmasa, fallback rasm ishlatiladi
                alt={mijoz.name}
                className="customer-img"
                width={50}
              />
              <h3 className="customer-name">{mijoz.name}</h3>
            </div>
            <p className="customer-feedback">{mijoz.label}</p>
            <img src={mijoz.baho} alt="Reyting" className="customer-rating" />
          </SwiperSlide>
          
          ))}
        </Swiper>

        <div className="custom-swiper-buttonses">
          <div className="custom-swiper-button-preve">❮</div>
          <div className="custom-swiper-button-nexte">❯</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
