import React from "react";
import { useTheme } from "../ThemeContext";
import "../styles/Switch.css"; // Make sure you create this CSS file

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="switch-container" onClick={toggleTheme}>
      <div className={`switch-slider ${theme === "dark" ? "dark-mode" : ""}`}></div>
    </div>
  );
};

export default Switch;
