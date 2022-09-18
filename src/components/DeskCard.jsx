import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";


function DeskCard({ waitTime, deskNum , waitNum}) {
  return (
        
<div className="flex flex-col items-center cursor-pointer bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 w-96 justify-between my-4">
     <div
      className="ml-5 text-white rounded-full bg-[#CB98D4]  flex items-center justify-center font-mono"
      style={{ width: `4rem`, height: `4rem`, fontSize: "2.5rem" }}
    >
      {waitNum}
    </div>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 ">Desk {deskNum}</h5>
        <p className="mb-3 font-normal text-gray-700 ">Approx. {waitTime} min</p>
    </div>
    <Button
        type="text"
        icon={<RightOutlined style={{ fontSize: "3rem", color: "gray" }} />}
        size="large"
        style={{ width: "5rem", height: "5rem" }}
      ></Button>
</div>

  );
}

export default DeskCard;
