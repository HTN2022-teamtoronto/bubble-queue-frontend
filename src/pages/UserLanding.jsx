import React from 'react';
import Language from "../components/Language";
import CodeInputForm from '../components/CodeInputForm';
import "antd/dist/antd.css";
function UserLanding(){
  return (
    <div  >
        <div className='cursor-pointer'>
        <Language />
        </div>
        <div >
          <CodeInputForm />
        </div>
    </div>
  );
}

export default UserLanding;