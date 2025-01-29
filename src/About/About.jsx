import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Aboutheader from './Aboutheader'
import Aboutmain from './Aboutmain'
import Aboutsidebar from './Aboutsidebar'
import Sidebar from '../Sidebar/Sidebar'

function About() {
  return (
    <>
        <Header/>
       <Aboutheader/>
       <Aboutmain/>
       <Aboutsidebar/>
       <Sidebar/>
        <Footer/>
    </>
  )
}

export default About