import React, {useContext} from 'react'
import './loginpage.css'
import Logo from '../../assets/logoymsi.svg'
import { LoginContext } from '../Context/LoginContext';



export const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const handleLogin = () => {
      setLoggedIn(false);
  }

  return (
    <div className='loginpage-container'>
      <div className="login">
        <div className="logo">
            <img src={Logo} alt="" />
            <h3>Login</h3>
        </div>
        <div className="input-fields">
            <input type="text" placeholder='Username...' />
            <input type="password" placeholder='Password...' />
            <input type="submit" value='Submit' id='login-btn' onClick={handleLogin}/>
        </div>
        <div className="reset-password">
            <p>Forgot Password? <a href="/recover">Click here</a> to Reset Password</p>
        </div>
      </div>
    </div>
  )
}
