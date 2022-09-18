import React, { useState } from "react";
import BubbleLogo from "../../assets/bubble.png";
import { Input } from "antd";

const CodeInputForm = () => {
  return (
    <div class="flex flex-col items-center space-y-4 justify-center">
      <img class="h-36 w-36" src={BubbleLogo} />

      <div class="text-xl text-white">
        <Input
          size="large"
          style={{ textAlign: "center", width: "100%" }}
          placeholder="Enter your PIN"
        />
      </div>
    </div>
  );
};

export default CodeInputForm;
