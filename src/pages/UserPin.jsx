import React from 'react';
import BubbleLogo from "../assets/bubble.png";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

function UserPin(){
    const PIN = "123456";
  return (
     <>
    <Button
        type="text"
        icon={<LeftOutlined style={{ fontSize: "3rem", color: "white" }} />}
        size="large"
        style={{ width: "5rem", height: "5rem" }}
      ></Button>
    <div className="flex flex-col items-center justify-center" >
        
        <img className="h-24 w-24" src={BubbleLogo} />
        <p className="flex flex-col text-white justify-center items-center" style={{fontSize:"3rem"}}>Event Created</p>
    </div>
    </>
  );
}

export default UserPin;