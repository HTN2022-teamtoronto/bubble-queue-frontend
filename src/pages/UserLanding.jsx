import React from 'react';
import Language from "../components/Language";
import CodeInputForm from '../components/CodeInputForm';
import "antd/dist/antd.css";
function UserLanding(){
  return (
    <div  >
        <Language id={0}/>
        <div >
          <CodeInputForm />
          
        </div>
    </div>
  );
}

export default UserLanding;