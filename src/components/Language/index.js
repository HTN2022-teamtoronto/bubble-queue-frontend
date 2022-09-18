import React, { useState } from "react";
import "./styles.css";
import EarthLogo from "../../assets/earth.png";

const Language = () => {
  return (
    <div class="flex justify-end shrink-0 p-6 items-center space-x-2 pr-8">
      <div class="shrink-0">
        <img class="h-12 w-12" src={EarthLogo} />
      </div>

      <div class="text-xl font-medium text-white">EN</div>
    </div>
  );
};

export default Language;
