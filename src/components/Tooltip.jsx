import React, { useState } from "react";
import "../styles/Tooltip.css"; // Import styles

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltip-text">{text}</div>}
    </div>
  );
};

export default Tooltip;
