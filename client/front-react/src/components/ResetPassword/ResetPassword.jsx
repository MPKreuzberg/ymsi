import React from 'react'
import './resetpassword.css'

export const ResetPassword = () => {
  return (
    <div className='reset-psw-container'>
      <div className="reset-psw">

        <h3>Reset your Password</h3>
        <input type="email"  placeholder='Enter you Email...'/>
        <input type="submit" value="Submit" id='reset-btn' />
      </div>
    </div>
  )
}
