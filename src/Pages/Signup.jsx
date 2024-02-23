import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Signup() {

  const [formData, setFromData] = useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
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
    setLoading(true)
    try {
      const res=await axios.post('http://localhost:5000/signup',formData);
      if(res.success===false){
        setError(res.message);
        setLoading(false)
        return
      }
      setLoading(false)
      setError(null)
      navigate('/login')
      
      
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
  return (
    <>
      <h2>Sing Up</h2>
      <form onSubmit={submit}>
        <input type="text" placeholder='username' name='username' onChange={handleData} />
        <input type="text" placeholder='email' name='email' onChange={handleData} />
        <input type="text" placeholder='password' name='password' onChange={handleData} />
        <button disabled={loading}>{loading? "Loading...": "Sign-Up"}</button>
      </form>
      <p>You Have a Account ? <Link to='/login'> Log In</Link></p>
      {error && <p>{error}</p>}
    </>
  )
}

export default Signup