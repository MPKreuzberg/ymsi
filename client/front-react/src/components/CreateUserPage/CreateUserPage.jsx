import React from 'react'
import './createuserpage.css'
import Logo from '../../assets/logoymsi.svg'

export const CreateUserPage = () => {
  return (
    <div className='createuser-container'>
      <div className="create-acc">

        <div className="logo">
            <img src={Logo} alt="" />
            <p>A place to share knowledge</p>
            <hr />
        </div>
        <div className="create-account">
            <h3>Create an Account to start Posting</h3>
            <div className="create-input">
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="submit" value="Submit" id='create-btn' />
            </div>
        </div>
      </div>
    </div>
  )
}
