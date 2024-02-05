import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='register'>
        <div className='container'>
                <div className='column d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                    <h1 className='text-center mb-5 register-heading'>Sign Up.</h1>
                    </div>
                   
                    <div className='d-flex flex-column w-50 p-5'>
                        <input className='p-2 my-3 input-register' type="email" name='email' placeholder='Enter your Email' />
                        <input className='p-2 my-3 input-register' type="username" name='username' placeholder='Enter your Username' />
                        <input className='p-2 my-3 input-register' type="password" name='password' placeholder='Enter your Password' />
                        <button className='btn-register p-2 mt-3'>Sign Up</button>
                    </div>
                   
                </div>
            
        </div>
    </div>
  )
}

export default Register