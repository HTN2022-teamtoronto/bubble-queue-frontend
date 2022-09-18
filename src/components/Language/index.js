import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import EarthLogo from "../../assets/earth.png";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
const Language = ({ id = 0 }) => {
  const path = id ? "/" : "/host";
  return (
    <div className="flex justify-between">
      <Link className="flex shrink-0 p-6 items-center space-x-2 pr-8" to={path}>
        <div className="shrink-0">
          <PeopleAltIcon className="fill-white" sx={{ fontSize: 50 }} />
        </div>
        <div className="text-xl font-medium text-white">
          {id ? "HOST" : "USER"}
        </div>
      </Link>

      <div className="flex shrink-0 p-6 items-center space-x-2 pr-8">
        <div className="shrink-0">
          <img className="h-12 w-12" src={EarthLogo} />
        </div>
        <div className="text-xl font-medium text-white">EN</div>
      </div>
    </div>
  );
};

export default Language;
