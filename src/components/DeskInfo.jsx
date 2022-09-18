import React from "react";
import BubbleLogo from "../assets/bubble.png";

function DeskInfo({deskNum, waitNum}) {
  return (
    <div className="flex w-2/6 justify-between">
        <p
            className=" text-white justify-center "
            style={{ fontSize: "3rem" }}
          >
            Desk{deskNum}
          </p>
          <div className="flex">
        <img className="h-12 w-12" src={BubbleLogo} />
        <p
            className=" text-white justify-center items-center"
            style={{ fontSize: "3rem" }}
          >
            {waitNum}
          </p>
        </div>
    </div>
  );
}

export default DeskInfo;
