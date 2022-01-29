import React from "react";

import HeaderLeftBar from "./HeaderLeftBar";
import People from "./People";

const LeftBar = () => {
  return (
    <div className="left-bar">
      <HeaderLeftBar />
      <People />
    </div>
  );
};

export default LeftBar;
