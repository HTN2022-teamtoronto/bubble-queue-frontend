import React from 'react';
import DeskCard from '../components/DeskCard';
import BubbleLogo from "../assets/bubble.png";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
function UserChoosing(){
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
        <p class="flex flex-col text-white justify-center items-center" style={{fontSize:"3rem"}}>Choose your Queue</p>
        <DeskCard waitTime={12} deskNum={"A"} waitNum={5}/>
        <DeskCard waitTime={18} deskNum={"B"} waitNum={12}/>
    </div></>
  );
}

export default UserChoosing;
