import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Contacthero from './Contacthero'
import Conatctsection from './Conatctsection'

function Contact() {
  useEffect(() => {
    document.title = "Matras Contact Us"; // Sahifa sarlavhasini o'zgartirish
  }, []);
  return (
    <div>
        <Header/>
        <Conatctsection/>
         <Contacthero/>
        <Footer></Footer>
    </div>
  )
}

export default Contact