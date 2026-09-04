import React, { useState } from 'react'

const OnlineOfflineStatus = () => {
    const [isOnline,setIsOnline] = useState(false);
      return (
    <div>
        <h2>Online/Offline status</h2>
        <h3>{isOnline ? "online" : "offline"}</h3>
        <button onClick={()=> setIsOnline(!isOnline)}>Online/Offline</button>
      
    </div>
  )
}

export default OnlineOfflineStatus
