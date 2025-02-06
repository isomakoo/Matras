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
            1000: { slidesPerView: 3 }, // 1000px dan yuqori
            600: { slidesPerView: 2 },  // 500px dan yuqori
            0: { slidesPerView: 1 },    // 500px dan past
          }}
        >
          {mijozfikri.map((mijoz) => (
            <SwiperSlide
              key={mijoz.id}
              style={{
                position: "relative",
                width: "320px",
                height: "500px",
                backgroundImage: `url(${images3})`,
                background: "rgba(14, 33, 99, 0.85)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Orqa fonda yarim shaffof ko'k rang */}
              <div className="overlay"></div>

              {/* Mijoz ma'lumotlari */}
              <div className="content-navbar">
                <img src={mijoz.rasmi} alt={mijoz.name} className="customer-img" width={50}/>
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
