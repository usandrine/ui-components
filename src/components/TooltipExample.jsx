import React from "react";
import Tooltip from "./Tooltip";

const TooltipExample = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Tooltip text="This is a home icon">
        <span role="img" aria-label="home" style={{ fontSize: "24px" }}>
          🏠
        </span>
      </Tooltip>

      <Tooltip text="Settings">
        <span role="img" aria-label="settings" style={{ fontSize: "24px", marginLeft: "20px" }}>
          ⚙️
        </span>
      </Tooltip>
    </div>
  );
};

export default TooltipExample;
