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
      <button onClick={() => setActiveComponent("Switch")}>Switch</button>
      <button onClick={() => setActiveComponent("Tabs")}>Tabs</button>
      <button onClick={() => setActiveComponent("Tooltip")}>Tooltip</button>


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
