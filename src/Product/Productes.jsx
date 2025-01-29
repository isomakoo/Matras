import React from "react";
import './product.css'

function Productes() {
  return (
    <div>
      <div className="producthero">
        <div className="producthero-container">
          <h1 className="product-title">Sizga moslashtirilgan sifatli uyqu</h1>
          <p className="product-text">
            Yumshoq xotirali ko’pikdan tortib, qo’llab-quvvatlovchi buloqqa
            qadar biz har bir didga mos keladigan matraslarning keng tanlovini
            taklif etamiz.
          </p>
          <img
            src="https://s3-alpha-sig.figma.com/img/8c71/74be/2a927e1615f8454528cedda52d055a26?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2FktmLxGIDT7OiSMyNyH2NdU1jCtXtfYvVA-Rn8mtvU6fzJ23I9GqwnmQLIEn-A53JqFozGZHCTDui54XXIXwZ56xFWtUPeg4pTo2a703YHUfHAU6Dv9X83eaoJLkSxdvcCXdVJLWVUWQwQtV-24Skp-pevTXmsim-ZUrrvKT5pKOxvzTmNUC6VIWVw1HXLm3lEmYVTbG2LaolvxOOoWG6-GyVUZSoXcHWOw~x5-0-5eE7Y7VH2mMVEfj31XhIBkWQKaF7SIVy5q~BLpfr5C1Opqxme~vvNUIhBIn8XV8pgRVbVfJH3BNbbjeiIalALNbIwFQh4fsx4X5DFRHcaZQ__"
            alt="matras"
            className="product-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Productes;
