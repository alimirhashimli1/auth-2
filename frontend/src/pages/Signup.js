import React from 'react'
import { useState } from 'react'
import {useAuthContext} from "../hooks/useAuthContext";


const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async(email, password) => {
      setIsLoading(true)
      setError(null)
      
      const response = await fetch("/api/user/signup", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
  })
  const json = await response.json()


  if(!response.ok){
      setIsLoading(false)
      setError(json.error)
  }

  if(response.ok){
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json))

      // update auth context
      dispatch({type: "LOGIN", payload: json})

      setIsLoading(false)
  }
}




    

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
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
        <button disabled={isLoading} className='' > Signup</button>
        {error  && <div className='error'>{error}</div> }
    </form>
  )
}

export default Signup