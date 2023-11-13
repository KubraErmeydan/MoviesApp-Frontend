import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login () {

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 b-primary'>
        <div className='form_container p-5 rounded bg-white'>
            <form>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-2'>
                <label>Email</label>
                <input className='form-control' type='email' placeholder='Enter Email' />
            </div>
            <div className='mb-2'>
                <label>Password</label>
                <input className='form-control' type='Enter Password' placeholder='Enter password' />
            </div>  
            <div className='mb-2'>
                <input type='checkbox' id='check' className='custom-control custom-checkbox'/>
                <label htmlFor='check' className='custom-input-label ms-2'>Remember Me</label>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>sign in</button>
            </div>
            <p className='text-end mt-2'>
                Forgot <a href='#'>password?</a><Link to="/signup" className='ms-2'> Sign up</Link>
            </p>
              
            </form>
        </div>
      
    </div>
  )
}

export default Login
