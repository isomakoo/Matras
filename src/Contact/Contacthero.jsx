import React, { useState } from 'react';
import './Contact.css';
import contactimg from '../assets/contactimages1.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';  // Import useTranslation

function Contacthero() {
  const { t } = useTranslation();  // Access the translation function

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
    const CHAT_ID = '6914657739'; // Telegram chat ID

    const message = `
      ${t("name")}: ${formData.name}
      ${t("phone")}: ${formData.phone}
      ${t("message")}: ${formData.description}
    `;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const data = {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(t('form_success')); // Using translation for success message
        setFormData({
          name: '',
          phone: '',
          description: ''
        });
      } else {
        toast.error(t('form_error')); // Using translation for error message
      }
    } catch (error) {
      toast.error(t('form_error')); // Using translation for error message
    }
  };

  return (
    <div>
      <div className='contacthero'>
        <div className="contacther-container">
          <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor="name" className='contact-label'>{t("name_label")}</label>
            <input
              type="text"
              className='contact-inp'
              id="name"
              name="name"
              placeholder={t("name_placeholder")}
              value={formData.name}
              onChange={handleChange}
              required
            /> <br />

            <label htmlFor="phone" className='contact-label'>{t("phone_label")}</label>
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

            <label htmlFor="description" className='contact-label'>{t("message_label")}</label> <br />
            <textarea
              className='contact-inpus'
              id="description"
              name="description"
              placeholder={t("message_placeholder")}
              value={formData.description}
              onChange={handleChange}
              required
            /> <br />

            <button type="submit" className='contact-btn'>{t("submit_button")}</button>
          </form>

          <img src={contactimg} alt={t("image_alt")} width={486} height={619} className='contact-img' />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Contacthero;
