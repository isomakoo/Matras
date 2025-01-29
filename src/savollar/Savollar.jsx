import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FAQ from './Savoljavob';

function Savollar() {
  useEffect(() => {
    document.title = "Matras FAQ"; // Sahifa sarlavhasini o'zgartirish
  }, []);

  return (
    <div>
      <Header />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Savollar;
