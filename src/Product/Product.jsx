import React, { useEffect } from 'react'
import './product.css'
import '../Main/Main.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Productes from './Productes'

function Product() {
  useEffect(() => {
    document.title = "Matras Products"; // Sahifa sarlavhasini o'zgartirish
  }, []);
  return (
    <>
        <Header/>
        <Section/>
        <Footer/>
    </>
  )
}

export default Product