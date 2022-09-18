import React from 'react';
import Language from "../components/Language";

import "antd/dist/antd.css";
import CircleNumber from '../components/CircleNumber';
import TopBar from '../components/TopBar';
import QueueGenerator from '../components/QueueGenerator';
import Button from "../components/Button";
function ReceptionessConfirmPage(){
  return (
    <div>
        <TopBar />
        <div class="flex flex-row justify-center space-x-24">
        
          <CircleNumber />
          <Button title={"Next"} />
        </div>
        <QueueGenerator />
        <p class="flex flex-col text-white justify-center items-center content-end" style={{fontSize:"3rem"}}>Come back check in at 18:26</p>

    </div>
  );
}

export default ReceptionessConfirmPage;