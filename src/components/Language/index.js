import React, { useState } from "react";
import "./styles.css";
import EarthLogo from "../../assets/earth.png";

const Language = () => {
  return (
    <div className="flex justify-end shrink-0 p-6 items-center space-x-2 pr-8">
      <div className="shrink-0">
        <img className="h-12 w-12" src={EarthLogo} />
      </div>
      <div className="text-xl font-medium text-white">EN</div>
    </div>
  );
};

export default Language;
