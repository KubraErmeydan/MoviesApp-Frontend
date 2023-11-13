
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

  function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleUsername = (value) => {
        setUsername(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const handleEmail = (value) => {
        setEmail(value)
    }

    const handleButton = (path) => {
        sendRequest(path)
        setUsername("")
        setPassword("")
        setEmail("")
        navigate("/login") 
    }


    const sendRequest = (path) => {
        const data = {
            username: username,
            password: password,
            email: email
        }
        axios.post(`http://localhost:3000/${path}`, data)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                navigate.push("/home")
            })
            .catch((err) => {
                console.log(err)
            })
    }



  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 b-primary'>
    <div className='form_container p-5 rounded bg-white'>
        <form>
        <h3 className='text-center'>Sign Up</h3>
        <div className='mb-2'>
            <label htmlFor="username">User Name</label>
            <input className='form-control' type='text' placeholder='Enter User Name' onChange = {(i) => handleUsername(i.target.value)}/>
        </div>
        <div className='mb-2'>
            <label>Email</label>
            <input className='form-control' type='email' placeholder='Enter Email' onChange = {(i) => handleEmail(i.target.value)} />
        </div>
        <div className='mb-2'>
            <label>Password</label>
            <input className='form-control' type='Enter Password' placeholder='Enter password' onChange = {(i) => handlePassword(i.target.value)}/>
        </div>  
        
        <div className='d-grid mt-2'>
            <button className='btn btn-primary' onClick={handleButton} >sign Up</button>
        </div>
        <p className='text-end mt-2'>
          Already Registerd<Link to="/login" className='ms-2'> Sign in</Link>
        </p>
          
        </form>
    </div>  
    </div>
  )
}

export default SignUp