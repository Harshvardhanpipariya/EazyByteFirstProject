import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from "./Home.jsx";
import { LogIn } from "./LogIn.jsx";
import MyContextProvider from "./Context-Api/MyContextProvider.jsx";
import { AdminDashboard } from './AdminDashboard.jsx'; 


function App() {
  return (
    <MyContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-access" element={<LogIn />} />
        <Route path="/admin-Dashboard" element={<AdminDashboard />} /> 
      </Routes>
    </MyContextProvider>
  );
}

export default App;
