import { useState } from 'react'
import './SignupPage.css'

// Define an interface for the props
interface SignupPageProps {
  // setPageState is a function that accepts a string ('login' or 'signup') and returns nothing
  setPageState: (page: 'login' | 'signup') => void;
}

/**
 * 
 * SignupPage Component to allow users to login into the website
 */
const SignupPage: React.FC<SignupPageProps> = ({setPageState}) => {

    // States to handle email and password input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
  
    return (
        <div id="signup-card">
          <h2>Signup</h2>
          <form>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="confirm-password"
                placeholder="Conifrm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button id="signup-button" type="submit">Signup</button>
            <p>Already have an account? <a href="#" onClick={() => setPageState('login')}>Login</a></p>
          </form>
        </div>
      );
};






export default SignupPage