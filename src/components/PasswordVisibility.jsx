import React, { useState } from 'react'

const PasswordVisibility = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
    <h2> PasswordVisibility</h2>
    <input type={showPassword ? "text" : "password"} placeholder='Enter Password'/>
    <button onClick={()=>setShowPassword(!showPassword)}>{showPassword? "Hide Password":"Show Password"}</button>  
    </div>
  )
}

export default PasswordVisibility
