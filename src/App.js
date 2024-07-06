import React, { useState } from "react";
import './App.css'
import zen from './resource/Zen.png'

const user_data = [
  {email : "user1@example.com", password : "password123", username : "User 1"},
  {email : "user2@example.com", password : "password456", username : "User 2"}
]

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorLog, setError] = useState("")
  const [username, setUsername] = useState("")
  const [auth, setAuth] = useState(false)
  const [notification, setShowNotification] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = user_data.find((validation) => validation.email === email && validation.password === password)
    if (validation) {
      setAuth(true)
      setUsername(validation.username)
      setError('')
    } else {
      setAuth(false)
      setError('Invalid email or password')
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  }

  if(auth) {
    console.log("Success")
    return <h1>Welcome, {username}</h1>
  }

  return(
    <div>
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
            <button type="submit">Log in!</button>
          </form>
      </div>
      {errorLog && 
        <div className={`error-log ${notification ? 'show' : ''}`}>
          {errorLog}
        </div>
      }
    </div>
  )
}