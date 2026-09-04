import React, { useState } from 'react'

const ShowHideMessage = () => {
    const  [showmessage , setShowMessage]= useState(false);
  return (
    <div>
        <h2>Show/Hide Message</h2>
        
      <button onClick={()=>setShowMessage(!showmessage)}>{showmessage?"Hide Message":"Show Message"}</button>
      {showmessage && (<p>welcome to React!</p>)}
      
    </div>
  )
}

export default ShowHideMessage
