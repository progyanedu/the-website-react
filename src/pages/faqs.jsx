import React, { useState } from 'react';
import faqsData from '../data/info/faqsData.json'; // Assuming data is imported correctly

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
      <span className='font-bold text-2xl md:text-4xl'>Frequently Asked Questions</span>
      <div className="container faqs_container p-10">
        {faqsData.map((faq, index) => (
          <article key={index} className={`faq ${activeIndices.includes(index) ? 'active' : ''}`}>
            <div className="faq_icon"><i className={`uil ${activeIndices.includes(index) ? 'uil-minus' : 'uil-plus'}`}></i></div>
            <div className="question_answer">
              <h4>{faq.question}</h4>
              <button className="toggle-button" onClick={() => toggleAccordion(index)}>Toggle Answer</button>
              <p>{activeIndices.includes(index) ? faq.answer : ''}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
