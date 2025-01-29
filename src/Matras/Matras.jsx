import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Section from '../Section/Section'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

function Matras() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Main/>
        <Section/>
         {/* <Sidebar/> */}
         <Footer/>
    </div>
  )
}

export default Matras