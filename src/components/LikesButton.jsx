import React, { useState } from 'react'

const LikesButton = () => {
    const [likes,setLikes] = useState(10);
    const [liked,setLiked] = useState(false);
  return (
    <div>
        <h4>Like Button</h4>
        <p>likes : {likes}</p>
        <button onClick={()=>{
            if(liked){
                setLikes(likes-1);
                setLiked(false);
            }
            else{
                setLikes(likes+1);
                setLiked(true);
            }
        }}>{liked? "Liked":"Like"}</button>
      
    </div>
  )
}

export default LikesButton
