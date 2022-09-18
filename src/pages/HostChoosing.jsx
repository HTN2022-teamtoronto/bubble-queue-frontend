import React from 'react';
import BubbleLogo from "../assets/bubble.png";
import { Button as AntB} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import HostSectionCard from '../components/HostSectionCard';
import Button from "../components/Button";
import { Link } from "react-router-dom";

function HostChoosing(){
  return (
    <>
    <Link
        to={"/host"}>
    <AntB
        type="text"
        icon={<LeftOutlined style={{ fontSize: "3rem", color: "white" }} />}
        size="large"
        style={{ width: "5rem", height: "5rem" }}
      ></AntB></Link>
    <div className="flex flex-col items-center justify-center" >
        
        <img className="h-24 w-24" src={BubbleLogo} />
        <p className="flex flex-col text-white justify-center items-center" style={{fontSize:"3rem"}}>Choose your Queue</p>
        <HostSectionCard queueNum={"A"}/>
        <HostSectionCard queueNum={"B"}/>
        <Button title={"Next"} className="cursor-pointer"/>
    </div></>
  );
}

export default HostChoosing;
