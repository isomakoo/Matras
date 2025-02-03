import React, { useState } from 'react';
import './Contact.css';
import contactimg from '../assets/contactimages1.png';
import { toast, ToastContainer } from 'react-toastify'; // ToastContainer ni import qilish
import 'react-toastify/dist/ReactToastify.css'; // Toastify uchun kerakli stillar

function Contacthero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const TELEGRAM_BOT_TOKEN = '7470121724:AAF3hMX_ihKKbXPyBSmby8X3NcDr-SF5si0'; // Telegram bot token
    const CHAT_ID = '6914657739'; // Telegram chat ID (botga yuboriladigan chat ID)

    // Telegram botga yuboriladigan xabar
    const message = `
      Ism: ${formData.name}
      Telefon: ${formData.phone}
      Tavsif: ${formData.description}
    `;

    // Telegram API URL
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    // Yuboriladigan ma'lumotlar
    const data = {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'HTML', // HTML formatini ishlatish (yoki 'Markdown'ni ham tanlashingiz mumkin)
    };

    try {
      // Telegramga so'rov yuborish
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Ariza yuborildi! Tez Orada Mutaxasislar siz bilan Boglanishadi'); // Success message
        setFormData({
          name: '',
          phone: '',
          description: ''
        });
      } else {
        toast.error('Xatolik yuz berdi!'); // Error message
      }
    } catch (error) {
      toast.error('Xatolik yuz berdi!'); // Error message
    }
  };

  return (
    <div>
      <div className='contacthero'>
        <div className="contacther-container">
          <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor="name" className='contact-label'>Ismingizni kiriting</label>
            <input
              type="text"
              className='contact-inp'
              id="name"
              name="name"
              placeholder="Ism Familiyani kiriting"
              value={formData.name}
              onChange={handleChange}
              required
            /> <br />

            <label htmlFor="phone" className='contact-label'>Telefon raqam</label>
            <input
              type="tel"
              className='contact-inp'
              id="phone"
              name="phone"
              placeholder="+998"
              value={formData.phone}
              onChange={handleChange}
              required
            /> <br />

            <label htmlFor="description" className='contact-label'>Habaringizni yozing</label> <br />
            <textarea
              className='contact-inpus'
              id="description"
              name="description"
              placeholder="Habaringizni kiriting"
              value={formData.description}
              onChange={handleChange}
              required
            /> <br />

            <button type="submit" className='contact-btn'>JO’NATISH</button>
          </form>

          <img src={contactimg} alt="matras" width={486} height={619} className='contact-img' />
        </div>
      </div>

      {/* ToastContainer component is necessary to render the toasts */}
      <ToastContainer /> {/* To'g'ri yozilgan ToastContainer */}
    </div>
  );
}

export default Contacthero;
