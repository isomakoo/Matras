import React from "react";
import "./Contact.css";

function Conatctsection() {
  return (
    <>
      <div className="contactsection">
        <h1 className="contactsection-title">Biz bilan bog’lanish uchun</h1>
        <div className="contactsection-list">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1594.3680367103227!2d69.28702700590728!3d41.3415796944402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40L3RhNC-0YDQvNCw0YbQuNC-0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40Lkg0LjQvNC10L3QuCDQnNGD0YXQsNC80LzQsNC00LAg0LDQuy3QpdC-0YDQsNC30LzQuNC5!5e0!3m2!1sru!2s!4v1737971959669!5m2!1sru!2s"
            className="contactsection-kart"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <nav className="contactsection-navbar">
            <p className="contactsection-text">Email adress:</p>
            <a href="WestMatress1@gmail.com" className="contactsection-link">
              WestMatress1@gmail.com
            </a>
            <p className="contactsection-text">Murojat uchun Raqamkar:</p>
            <a href="tel:+998 95 840 79 79" className="contactsection-link">
              +998 95 840 79 79
            </a>{" "}
            <br />
            <a href="tel:+998 78 333 79 79" className="contactsection-link">
              +998 78 333 79 79
            </a>
            <p className="contactsection-text">Bizning manzil:</p>
            <a href="WestMatress1@gmail.com" className="contactsection-link">
              Yunusobod tumani, Yangi Yunusobod ko‘chasi, 13-kvartira, 45-uy,
              14-xonadon
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Conatctsection;
