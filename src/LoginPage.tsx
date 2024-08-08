import { useState } from 'react'
import './LoginPage.css'
const LoginPage = ({}) => {

    // States to handle email and password input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // Add logic to handle login (e.g., call an API, validate input)
    //   //onLogin(email, password);
    // };

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
            <button type="submit">Login</button>
          </form>
        </div>
      );
};






export default LoginPage