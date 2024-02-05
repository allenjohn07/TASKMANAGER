import React from 'react'

function Login() {
  return (
    <div className='login'>
        <div className='container'>
                <div className='column d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                    <h1 className='text-center mb-5 register-heading'>Log In.</h1>
                    </div>
                   
                    <div className='d-flex flex-column w-50 p-5'>
                        <input className='p-2 my-3 input-register' type="email" name='email' placeholder='Enter your Email' />
                        <input className='p-2 my-3 input-register' type="password" name='password' placeholder='Enter your Password' />
                        <button className='btn-register p-2 mt-3'>Log In</button>
                    </div>
                   
                </div>
            
        </div>
    </div>
  )
}

export default Login