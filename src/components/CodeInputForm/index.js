import React from "react";
import BubbleLogo from "../../assets/bubble.png";
import { Input } from "antd";
import Button from "../Button";
const CodeInputForm = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-center">
      <img className="h-36 w-36" src={BubbleLogo} />

      <div className="text-xl text-white w-2/6">
        <Input
          size="large"
          style={{ textAlign: "center", width: "100%" }}
          className="w-full"
          placeholder="Enter your PIN"
        />
      </div>
      <Button title={"Next"} />
    </div>
  );
};

export default CodeInputForm;
