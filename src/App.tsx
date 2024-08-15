import { useState } from 'react'
import './App.css'
import LoginPage from './LoginPage.tsx'
import SignupPage from './SignupPage.tsx'

// Main Entry point for the app
function App() {
  // State to switch between Login or Signup pages
  const [pageState, setPageState] = useState('login')

  return (
    <div id="main">
      {pageState === 'login' ? (<LoginPage setPageState={setPageState} />) : (<SignupPage />)}
      <button onClick={() => setPageState('login')}>Go to Login</button>
      <button onClick={() => setPageState('signup')}>Go to Signup</button>
    </div>
  )
}

export default App
