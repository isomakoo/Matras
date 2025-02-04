import React, { useState } from 'react';
import './Faq.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

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
    // Add more translated questions and answers if needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">{t("faq_title")}</h2> {/* Translated title */}
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
