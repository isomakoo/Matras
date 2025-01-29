import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "Sifat darajasi qanday?",
    answer: "Bizning matraslar yuqori sifatli materiallardan tayyorlanadi va mukammal sifat nazorati ostida ishlab chiqariladi."
  },
  {
    question: "“Matras nomi” necha pul turadi?",
    answer: "Narxlar modellarga qarab o'zgaradi. Batafsil ma'lumotni mahsulotlar sahifasida yoki mijozlarga xizmat ko'rsatish bo'limida olishingiz mumkin."
  },
  {
    question: "Ishonchlimi?",
    answer: "Ha, bizning matraslar sifat va mustahkamlik jihatidan sinovdan o'tkazilgan va ishonchli hisoblanadi."
  },
  {
    question: "Qayerda ishlab chiqarilgan?",
    answer: "Matraslarimiz yuqori sifatli ishlab chiqarish zavodlarida ishlab chiqariladi."
  },
  {
    question: "Sifat darajasi qanday?",
    answer: "Har bir matras qat'iy sifat nazorati ostida ishlab chiqariladi va sertifikatlangan."
  },
  // Qo'shimcha savollar va javoblar qo'shish mumkin
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
