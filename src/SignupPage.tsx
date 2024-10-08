import { useState } from 'react'

const SignupPage = ({}) => {

    // States to handle email and password input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // Add logic to handle login (e.g., call an API, validate input)
    //   //onLogin(email, password);
    // };



    return (
        <div>
          <h2>Signup</h2>
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
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


export default SignupPage