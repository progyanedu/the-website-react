
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqsData from "../data/info/faqsData.json";


const FAQs = () => {
  const [activeIndices, setActiveIndices] = useState([]); // State to track multiple active FAQs

  const toggleAccordion = (index) => {
    const updatedIndices = [...activeIndices]; // Create a copy to avoid mutation

    if (updatedIndices.includes(index)) {
      // Remove the index if already active
      updatedIndices.splice(updatedIndices.indexOf(index), 1);
    } else {
      // Add the index if not active
      updatedIndices.push(index);
    }

    setActiveIndices(updatedIndices);
  };

  return (
    <section className="faqs">

      <h2 className="font-bold text-4xl">Frequently Asked Questions</h2>
      <div className="container faqs_container">
        {faqsData.map((faq, index) => (
          <article
            key={index}
            className={`faq ${index === activeIndex ? "active" : ""}`}
          >
            <div className="faq_icon" onClick={() => toggleAccordion(index)}>
              {index === activeIndex ? (
                <FaMinus size={25} />
              ) : (
                <FaPlus size={25} />
              )}
            </div>
            <div className="question_answer">
              <h4 onClick={() => toggleAccordion(index)}>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
