import React from "react";
import "../styles/Sheet.css"; // Import the CSS

const Sheet = ({ isOpen, onClose }) => {
  return (
    <div className={`sheet-container ${isOpen ? "open" : ""}`}>
      <div className="sheet-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Edit Profile</h2>
        <p>Here you can update your profile details.</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button>Save Changes</button>
      </div>
    </div>
  );
};

export default Sheet;
