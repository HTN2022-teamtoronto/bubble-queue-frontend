import React, { useState } from "react";

const CircleNumber = ({ number, size }) => {
  return (
    <div
      className=" text-white rounded-full bg-[#CB98D4]  flex items-center justify-center font-mono"
      style={{ width: `11rem`, height: `11rem`, fontSize: "5rem" }}
    >
      {number}
    </div>
  );
};

export default CircleNumber;
