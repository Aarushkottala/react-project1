import React, { useState } from 'react'

const LiveNameDisplay = () => {
    const [name , setName] = useState("")
  return (
    <div>
        <h3>Live name display</h3>
        <input type="text" placeholder='Enter your Name' value={name} onChange={(name)=>setName(name.target.value)
        } />
        <h4>Hello,{name}</h4>
      
    </div>
  )
}

export default LiveNameDisplay
