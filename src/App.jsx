import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dialog from "./components/Dialog";
import Calendar from "./components/Calendar";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";



const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dialog");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="content">
        <h1>{activeComponent} Component</h1>

        <div className="component-wrapper">
          {activeComponent === "Dialog" && (
            <>
              <button onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
              <Dialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title="Confirmation"
              >
                <p>Are you sure you want to proceed?</p>
              </Dialog>
            </>
          )}

          {activeComponent === "Calendar" && <Calendar />}
          {activeComponent === "Accordion" && <Accordion />}
          {activeComponent === "Carousel" && <Carousel />}
        </div>
      </div>
    </div>
  );
};

export default App;
