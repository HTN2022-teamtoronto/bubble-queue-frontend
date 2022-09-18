import React from "react";

function Button({ waitTime, deskNum , waitNum}) {
  return (
      <div >
        
<div className="flex flex-col items-center cursor-pointer bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 ">
   <div className="rounded-full h-full bg-purple-light">{waitNum}</div>

    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Desk {deskNum}</h5>
        <p className="mb-3 font-normal text-gray-700 ">Approx. {waitTime} min</p>
    </div>
</div>

    </div>
  );
}

export default Button;
