import React, { useState } from 'react';
import './Faq.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

function FAQ() {
  const { t } = useTranslation();  // Access the translation function

  const faqData = [
    {
      question: t("faq_question_1"),  // Translated question
      answer: t("faq_answer_1")       // Translated answer
    },
    {
      question: t("faq_question_2"),
      answer: t("faq_answer_2")
    },
    {
      question: t("faq_question_3"),
      answer: t("faq_answer_3")
    },
    {
      question: t("faq_question_4"),
      answer: t("faq_answer_4")
    },
    {
      question: t("faq_question_5"),
      answer: t("faq_answer_5")
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between active/inactive state
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">{t("faq_title")}</h2> {/* Translated title */}
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => toggleAnswer(index)} // Toggle on question click
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}  {/* Icons */}
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
