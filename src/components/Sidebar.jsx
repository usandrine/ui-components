// src/components/Sidebar.jsx
import React, { useState } from "react";
import "../styles/Sidebar.css";

const components = [
  "Dialog",
  "Calendar",
  "Accordion",
  "Carousel",
  "Table",
  "Sheet",
  "Switch",
  "Tabs",
  "Tooltip",
];

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="sidebar">
      <h2>UI Components</h2>
      <ul>
        {components.map((comp) => (
          <li key={comp} onClick={() => setActiveComponent(comp)}>
            {comp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
