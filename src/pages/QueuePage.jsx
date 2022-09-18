import React from 'react';
import Language from "../components/Language";

import "antd/dist/antd.css";
import CircleNumber from '../components/CircleNumber';
import TopBar from '../components/TopBar';
import QueueGenerator from '../components/QueueGenerator';
function QueuePage(){
  return (
    <div  >
        <TopBar />
        <div class="flex flex-row justify-center space-x-20 ">
            <p class="text-white" style={{fontSize:"6rem"}}>You are</p>
          <CircleNumber />
          

         
        </div>
        <QueueGenerator />

        <p class="flex flex-col text-white justify-center items-center content-end" style={{fontSize:"3rem"}}>Come back check in at 18:26</p>

    </div>
  );
}

export default QueuePage;