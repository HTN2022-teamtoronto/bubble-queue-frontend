import React from 'react';
import DeskCard from '../components/DeskCard';
function UserChoosing(){
  return (
    <div className="flex flex-col items-center justify-center" >
        <DeskCard waitNum={12}/>
    </div>
  );
}

export default UserChoosing;
