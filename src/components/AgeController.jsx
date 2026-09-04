import React, { useState } from 'react'

const AgeController = () => {
    const [age,setAge] = useState(20);

  return (
    <div>
        <h3>Age:{age}</h3>
        <button onClick={()=> setAge(age+1)}>Increase Age</button>
        <button onClick={()=>{if(age>0){
            setAge(age-1);
        }}}>decrease age</button>
      
    </div>
  )
}

export default AgeController
