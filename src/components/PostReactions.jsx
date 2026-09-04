import React, { useState } from 'react'

const PostReactions = () => {
    const [likes,setLikes] = useState(0);
    const [comments,setComments] = useState(0);
    const [shares , setShares] = useState(0);
    return (
        <div>
            <h4>Post Reactions</h4>
            <div>
                <button className='btn btn-primary' onClick={()=>setLikes(likes+1)}>Likes {likes}</button>
                <button className='btn btn-success' onClick={()=>setComments(comments+1)}>Comments {comments}</button>
                <button className='btn btn-warning' onClick={()=>setShares(shares+1)}>Shares {shares}</button>
            </div>
      
        </div>
    )
}

export default PostReactions
