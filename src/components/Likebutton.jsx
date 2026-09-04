import React, { useState } from 'react'

const Likebutton = () => {
    const [likes,setlikes]=useState(0);
  return (
    <div>
        <p>{likes}</p>
        <button onClick={()=>setlikes(likes+1)}>like</button>
        
      
    </div>
  )
}

export default Likebutton
