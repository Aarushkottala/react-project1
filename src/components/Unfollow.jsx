import React, { useState } from 'react'

const Unfollow = () => {
    const [following, setFollowing] = useState(false);

  return (
    <div>

        <h4>Follow/Unfollow</h4>
        <button className={following? "btn btn-danger":"btn btn-primary"} onClick={()=>setFollowing(!following)}>{following?"UnFollow":"Follow"}</button>
      
    </div>
  )
}

export default Unfollow
