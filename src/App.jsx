import React from 'react';
import UserLanding from './pages/UserLanding';
import UserChoosing from './pages/UserChoosing';
import "antd/dist/antd.css";
function App(){
  return (
    <div className="font-raleway w-full justify-center" >
       {/* <UserLanding /> */}
       <UserChoosing/>
    </div>
  );
}

export default App;
