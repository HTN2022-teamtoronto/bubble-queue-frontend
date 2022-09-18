import { Tooltip } from "antd";
import React, { useState } from "react";

const mockData = [0, 1, 2, 3, 4, 5,6,7];
const bubbleSize = 3;
const ticket = 4;

const ColorBlock = ({ queueMember }) => {
  return (
    <div class="flex flex-row space-x-4 pr-28">
      <div class="h-48 w-40 rounded-lg bg-[#CB98D4]">
        <div class="flex">
          <div
            class="text-white flex items-center justify-center font-mono"
            style={{ width: "11rem", height: "11rem", fontSize: "5rem" }}
          >
            <Tooltip
              title="Now Calling"
              color={"#B174D9"}
              align={{
                offset: [0, -30],
              }}
              open
            >
              {mockData[0]}
            </Tooltip>
          </div>
        </div>
      </div>

      <div class="h-48 w-96 rounded-lg bg-[#9DDBE6]">
        <div class="flex">
          <div
            class="text-white flex items-center justify-center font-mono"
            style={{ width: "11rem", height: "11rem", fontSize: "5rem" }}
          >
            <Tooltip
              title="Bubble"
              color={"#3AB8D3"}
              align={{
                offset: [0, -30],
              }}
              open
            >
       {mockData[1]}
              
            </Tooltip>
          </div>

{
  mockData.map((queueMember,index) => (
    index > 1 && index < bubbleSize +1 && (
      <div
            class="text-white flex items-center justify-center font-mono"
            style={{ width: "11rem", height: "11rem", fontSize: "5rem" }}
          >
           {queueMember} </div>
    )
  ))
}

      
        </div>
      </div>
      <div class="h-48 w-144 rounded-lg bg-[#D66DE5]">
        <div class="flex">
        
          {
  mockData.map((queueMember,index) => (
    index > bubbleSize && (
      <div
            class="text-white flex items-center justify-center font-mono"
            style={{ width: "11rem", height: "11rem", fontSize: "5rem" }}
          >
           { queueMember === ticket ? (
             <Tooltip
             title="You"
             color={"#D66DE5"}
             align={{
               offset: [0, -30],
             }}
             open
           >{queueMember} </Tooltip>):(queueMember)} </div>
    )
  ))
}
        </div>
      </div>
    </div>
  );
};

const QueueGenerator = () => {
  return (
    <div className="flex justify-end shrink-0 p-6 items-center space-x-2 pr-8">
      <div className="shrink-0">
        <ColorBlock />
      </div>
    </div>
  );
};

export default QueueGenerator;
