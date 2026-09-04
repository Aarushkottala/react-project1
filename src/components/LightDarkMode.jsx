import React, { useState } from 'react'

const LightDarkMode = () => {
    const [darkmode , setDarkmode] = useState(false);
  return (
    <div>
        <h2>Light/Dark mode</h2>
        <div className={darkmode?"bg-dark text-white":"bg-light text-dark"}>
            <h3>{darkmode?"dark mode":"light mode"}</h3>
            <button onClick={()=> setDarkmode(!darkmode)}>switch mode</button>

        </div>
      
    </div>
  )
}

export default LightDarkMode
