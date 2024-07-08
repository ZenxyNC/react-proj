import React, { useState } from "react";
import Dev from './component/developer/dev.js'
import Login from './component/login/login.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return(
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/developer/" element={<Dev />} />
        </Routes>
      </Router>
  )
}