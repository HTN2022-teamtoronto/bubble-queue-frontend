import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLanding from './pages/UserLanding';
import HostLanding from './pages/HostLanding';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <Router>
          <Routes>
            <Route path="/" element={<UserLanding />} exact />
            <Route path="/host" element={<HostLanding />} exact />


          </Routes>
        </Router>
    </StyledEngineProvider>
  </React.StrictMode>
);

