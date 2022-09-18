import React from 'react';
import DeskCard from '../components/DeskCard';
function UserChoosing(){
  return (
    <div className="flex flex-col items-center justify-center" >
        <p class="flex flex-col text-white justify-center items-center" style={{fontSize:"3rem"}}>Come back check in at 18:26</p>

        <DeskCard waitTime={12} deskNum={"A"} waitNum={5}/>
        <DeskCard waitTime={18} deskNum={"B"} waitNum={12}/>
    </div>
  );
}

export default UserChoosing;
