import React from 'react'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)
  }


  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h3>Signup</h3>


        <label htmlFor="">Email:</label>
        <input type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

<label htmlFor="">Password:</label>
        <input type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button className='' > Signup</button>
        {error  && <div></div> }
    </form>
  )
}

export default Signup