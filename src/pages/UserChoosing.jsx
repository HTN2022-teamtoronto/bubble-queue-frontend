import React from 'react';
import DeskCard from '../components/DeskCard';
function UserChoosing(){
  return (
    <div className="flex flex-col items-center justify-center " >
        <DeskCard waitTime={12} deskNum={"A"} waitNum={5}/>
    </div>
  );
}

export default UserChoosing;
