import { useState } from 'react'
import './App.css'
import LoginPage from './LoginPage.tsx'
import SignupPage from './SignupPage.tsx'

function App() {
  // State to switch between Login or Signup pages
  const [pageState, setPageState] = useState('login')

  return (
    <>
      <div>
      {pageState === 'login' ? (
      <LoginPage />
    ) : (
      <SignupPage />
    )}
      </div>
      <h1></h1>
      <button onClick={() => setPageState('login')}>Go to Login</button>
      <button onClick={() => setPageState('signup')}>Go to Signup</button>
    </>
  )
}

export default App
