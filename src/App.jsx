import React from 'react';
import Slider from '@mui/material/Slider';
import Language from "./components/Language";
import CodeInputForm from './components/CodeInputForm';
import "antd/dist/antd.css";
function App(){
  return (
    <div className="font-raleway" >
        <Language />
        <CodeInputForm />
    </div>
  );
}

export default App;
