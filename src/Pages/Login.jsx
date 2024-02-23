import React from 'react';
import {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {
  const [formData, setFromData] = useState({});
  
  const navigate=useNavigate()
  const handleData = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  console.log(formData)
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post('http://localhost:5000/login',formData);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2>Sing Up</h2>
      <form onSubmit={submit}>
        <input type="text" placeholder='email' name='email' onChange={handleData} />
        <input type="text" placeholder='password' name='password' onChange={handleData} />
        <button >Log In</button>
      </form>
      <p>Do not Have a Account ? <Link to='/signup'> Sign Up</Link></p>
      
    </>
  )
}

export default Login