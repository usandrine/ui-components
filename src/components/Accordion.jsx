import React, { useState } from "react";
import "../styles/Accordion.css";

const data = [
  { question: "What is React?", answer: "React is a JavaScript library for building UI." },
  { question: "What is a Component?", answer: "A component is a reusable piece of UI in React." },
  { question: "What is useState?", answer: "useState is a Hook for managing state in React." }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-header" onClick={() => toggleAccordion(index)}>
            {item.question}
          </button>
          {activeIndex === index && <div className="accordion-content">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
