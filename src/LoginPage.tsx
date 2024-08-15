import { useState } from 'react'
import './LoginPage.css'



// Define an interface for the props
interface LoginPageProps {
  // setPageState is a function that accepts a string ('login' or 'signup') and returns nothing
  setPageState: (page: 'login' | 'signup') => void;
}



/**
 * 
 * LoginPage Component to allow users to login into the website
 */
const LoginPage: React.FC<LoginPageProps> = ({setPageState}) => {

    // States to handle email and password input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
        <div id="login-card">
          <h2>Login</h2>
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
            <a id="forgot-password" href="">Forgot Password?</a>
            <button id="login-button" type="submit">Login</button>
            <p>Dont have an account? <a href="#" onClick={() => setPageState('signup')}>Signup</a></p>
          </form>
        </div>
      );
};






export default LoginPage