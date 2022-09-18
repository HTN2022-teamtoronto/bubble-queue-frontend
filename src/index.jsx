import React from 'react';
import ReactDOM from 'react-dom/client';
import UserLanding from './pages/UserLanding';
import HostLanding from './pages/HostLanding';
import UserChoosing from './pages/UserChoosing';
import HostChoosing from './pages/HostChoosing';
import QueuePage from './pages/QueuePage';
import UserPin from './pages/UserPin';
import HostPin from './pages/HostPin';
import ReceptionessConfirmPage from './pages/ReceptionessConfirmPage';
import './tailwind.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router className="font-raleway w-full justify-center">
          <Routes>
            <Route path="/userC" element={<UserChoosing />} exact />            
            <Route path="/hostC" element={<HostChoosing />}  />
            <Route path="/host" element={<HostLanding />}  />
            <Route path="/hostP" element={<HostPin />}  />
            <Route path="/" element={<UserPin />}  />
            <Route path="/user" element={<UserLanding />}  />
            <Route path="/queue" element={<QueuePage />}  />
            <Route path="/reception" element={<ReceptionessConfirmPage />}  />
          </Routes>
        </Router>
    </StyledEngineProvider>
  </React.StrictMode>
);

