// src/components/Calendar.jsx
import React, { useState } from "react";
import "../styles/Calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="calendar-container">
      <h2>Pick a Date</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="date-picker"
      />
      {selectedDate && <p>You selected: {selectedDate}</p>}
    </div>
  );
};

export default Calendar;
