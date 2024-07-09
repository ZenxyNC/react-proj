import React, { useState } from "react";
import './App.css';
import zen from './resource/Zen.png';
import { data } from './data.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dev from './component/developer/dev.js'
import Login from './component/login/login.js'

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLog, setError] = useState("");
  const [username, setUsername] = useState("");
  const [auth, setAuth] = useState(false);
  const [notification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = data.find((validation) => validation.email === email && validation.password === password);
    if (validation) {
      setAuth(true);
      setUsername(validation.username);
      setError('')
    } else {
      setAuth(false);
      setError('Invalid email or password');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  if (auth) {
    console.log({username});
    return <h1>Welcome, {username}</h1>
  }
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/react-proj/devs" element={<Dev />} />
          <Route path="/react-proj" element={<Login />} />
          <Route path="/react-proj/login" element={<Login />} />
        </Routes>
      </Router>
      <div className="base-div">
        <img src={zen} className="logo" alt=""/>
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>
          <button type="submit">Log inn!!</button>
        </form>
      </div>
      {errorLog && 
        <div className={`error-log ${notification ? 'show' : ''}`}>
          {errorLog}
        </div>
      }
    </div>
  );
}