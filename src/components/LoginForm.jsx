import React, { useState } from 'react'

const LoginForm = () => {
     const [email, setEmail]= useState("");
     const [password , setPassword] = useState("");
  return (
    <div>
        <h4> Login form</h4>
        <div>
            <lable>Email</lable>
            <input type="email" placeholder='Enter email' value={email} onChange={(email)=>setEmail(email.target.value)} />
        </div>
        <div>
            <label>Password</label>
            <input type="password" placeholder='Enter password' value={password} onChange={(password)=>setPassword(password.target.value)} />
        </div>
      <button onClick={()=>{}}>Login</button>
      <p>Entered Email : {email}</p>
    </div>

  )
}

export default LoginForm
