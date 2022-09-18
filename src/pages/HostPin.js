import React from "react";
import BubbleLogo from "../assets/bubble.png";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

function HostPin() {
  const PIN = "123456";
  return (
    <>
      <Button
        type="text"
        icon={<LeftOutlined style={{ fontSize: "3rem", color: "white" }} />}
        size="large"
        style={{ width: "5rem", height: "5rem" }}
      ></Button>
      <div className="flex flex-col items-center justify-center">
        <img className="h-24 w-24" src={BubbleLogo} />
        <p
          className=" text-white justify-center items-center"
          style={{ fontSize: "2rem" }}
        >
          Event Created
        </p>
        <p
          className=" text-white justify-center items-center"
          style={{ fontSize: "3rem" }}
        >
          PIN for staff
        </p>
        <div className="flex justify-between">
          <p
            className=" text-white justify-center items-center"
            style={{ fontSize: "3rem" }}
          >
            {PIN}
          </p>
          <p
            className=" text-white justify-center items-center"
            style={{ fontSize: "2rem" }}
          >
            Join at bubbleq.io
          </p>
        </div>
      </div>
    </>
  );
}

export default HostPin;
