import React from "react";
import HostBubbleLogo from "../../assets/bubble.png";
import { Input } from "antd";
import Button from "../Button";

// The reason why we don't reuse the CodeInputForm component is because we want to
// have a different logo for the host code input form and provide fast development for
// hackathon.
const HostCodeInputForm = () => {
  return (
    <div className="flex flex-col items-center space-y-10 justify-center pt-20">
      <img className="h-36 w-36" src={HostBubbleLogo} />
      <p class="text-white text-xl font-raleway">@Host</p>
      <div className="text-xl text-white w-2/6">
        <Input
          size="large"
          style={{
            textAlign: "center",
            width: "100%",
            height: "8vh",
            fontSize: "1.5rem",
          }}
          className="w-full"
          maxLength={2}
          placeholder="Number of lines"
        />
      </div>
      <Button title={"Create Event"} />
      <p class="text-white content-end">Copy right © 2022 HTN Team Toronto </p>
    </div>
  );
};

export default HostCodeInputForm;
