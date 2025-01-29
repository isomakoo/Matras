import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Home() {
  useEffect(() => {
    document.title = "Matras Home"; // Sahifa sarlavhasini o'zgartirish
  }, []);
  return (
    <div><Header/>
        <Navbar/>
        
        <Footer/>
    </div>
  )
}

export default Home