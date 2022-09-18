import React from "react";
import BubbleLogo from "../assets/bubble.png";
import { LeftOutlined } from "@ant-design/icons";
import { Button as AntButton } from "antd";
import DeskInfo from "../components/DeskInfo";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function HostPin() {
  const PIN = "123456";
  const deskInfo = [{deskNum:1, waitNum:5}, {deskNum:2, waitNum:12}, {deskNum:3, waitNum:18}];
  return (
    <>
     <Link
        to={"/hostC"}>
      <AntButton
        type="text"
        icon={<LeftOutlined style={{ fontSize: "3rem", color: "white" }} />}
        size="large"
        style={{ width: "5rem", height: "5rem" }}
      ></AntButton></Link>
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
        <div className="flex justify-center">
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
        {deskInfo.map((deskNum) => (
        <DeskInfo deskNum={deskNum.deskNum} waitNum={deskNum.waitNum}/>
          ))}
        <Button title={"End Section"} className="cursor-pointer"/>
      </div>
    </>
  );
}

export default HostPin;
