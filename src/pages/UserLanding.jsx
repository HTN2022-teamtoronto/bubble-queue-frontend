import React from 'react';
import Language from "../components/Language";
import CodeInputForm from '../components/CodeInputForm';
import "antd/dist/antd.css";
function UserChoosing(){
  return (
    <div  >
        <Language />
        <div >
          <CodeInputForm />
        </div>
    </div>
  );
}

export default UserChoosing;