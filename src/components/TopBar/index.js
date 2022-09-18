import React, { useState } from "react";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import BubbleLogo from "../../assets/bubble.png";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-6 ">
      <Button
        type="text"
        icon={<LeftOutlined style={{ fontSize: "3rem", color: "white" }} />}
        size="large"
        style={{ width: "5rem", height: "5rem" }}
      ></Button>
      <div class="pr-10 pt-5">
        <img class="h-20 w-20" src={BubbleLogo} />
      </div>
    </div>
  );
};

export default TopBar;
