import React, { useState } from "react";
import "../styles/Tabs.css"; // Import styles

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={activeTab === "Profile" ? "active" : ""}
          onClick={() => setActiveTab("Profile")}
        >
          Profile
        </button>
        <button
          className={activeTab === "Security" ? "active" : ""}
          onClick={() => setActiveTab("Security")}
        >
          Security
        </button>
        <button
          className={activeTab === "Notifications" ? "active" : ""}
          onClick={() => setActiveTab("Notifications")}
        >
          Notifications
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "Profile" && <p>This is the Profile section.</p>}
        {activeTab === "Security" && <p>Security settings go here.</p>}
        {activeTab === "Notifications" && <p>Manage notifications here.</p>}
      </div>
    </div>
  );
};

export default Tabs;
