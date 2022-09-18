import React from 'react';
import Language from "../components/Language";
import HostCodeInputForm from '../components/HostCodeInputForm';
import "antd/dist/antd.css";
function HostLanding(){
  return (
    <div  >
        <Language id={1} />
        <div >
          <HostCodeInputForm />
        </div>
    </div>
  );
}

export default HostLanding;