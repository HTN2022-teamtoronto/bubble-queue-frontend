import React from 'react';
import ReactDOM from 'react-dom/client';
import UserLanding from './pages/UserLanding';
import HostLanding from './pages/HostLanding';
import UserChoosing from './pages/UserChoosing';
import './tailwind.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QueuePage from './pages/QueuePage';
import ReceptionessConfirmPage from './pages/ReceptionessConfirmPage';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router className="font-raleway w-full justify-center">
          <Routes>
            <Route path="/reception" element={<UserChoosing />} exact />
            <Route path="/host" element={<HostLanding />}  />
            <Route path="/what" element={<UserLanding />}  />
            <Route path="/queue" element={<QueuePage />} exact />
            <Route path="/" element={<ReceptionessConfirmPage />}  />
          </Routes>
        </Router>
    </StyledEngineProvider>
  </React.StrictMode>
);

