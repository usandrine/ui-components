import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dialog from "./components/Dialog";
import Calendar from "./components/Calendar";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Table from "./components/Table";
import Sheet from "./components/Sheet";
import Switch from "./components/Switch";
import { useTheme } from './ThemeContext'; 
import "./App.css"; 
import Tabs from "./components/Tabs";
import TooltipExample from "./components/TooltipExample"; // Import TooltipExample component


const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dialog");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      {/* Place switch at top-right */}
      <div className="theme-toggle">
        <Switch />
      </div>

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
          {activeComponent === "Table" && <Table />}

          {activeComponent === "Sheet" && (
            <>
              <button onClick={() => setIsSheetOpen(true)}>Open Sheet</button>
              <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
            </>
          )}
          {activeComponent === "Switch" && <Switch />}
          {activeComponent === "Tabs" && <Tabs />}
          {activeComponent === "Tooltip" && <TooltipExample />}


        </div>
      </div>
    </div>
  );
};

export default App;
