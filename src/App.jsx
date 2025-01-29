import { Routes, Route } from 'react-router-dom';
import './App.css';
import Matras from './Matras/Matras';
import Contact from './Contact/Contact'; // Contact komponentini import qilish
import About from './About/About';
import Savollar from './savollar/Savollar';
import Home from './Home/Home';
import Product from './Product/Product';
import DetailsPage from './Section/Detailse';

function App() {
  return (
    <>
    <head>
      <title>
        Matrases
      </title>
    </head>
      <Routes>
        <Route path="/" element={<Matras />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<Savollar/>} />
        <Route path="/home" element={<Matras/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/details/:id" element={<DetailsPage/>} />
        {/* Boshqa marshrutlar */}
      </Routes>
    </>
  );
}

export default App;
