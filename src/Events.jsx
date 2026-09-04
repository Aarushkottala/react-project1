import React, { useState } from 'react'

const Events = () => {
const [name, setName] = useState("");
const [age , setAge] = useState(0);
const [city , setCity] = useState("");

  function InputData(e){
    setName(e);
  }
  function InputAge(e){
    setAge(e);

  }
  function InputCity(e){
    setCity(e);
  }
  return (
    <div>
       <div>
        <input type="text" onChange={(e)=>InputData(e.target.value)} /><span>{name}</span>
       </div><br />
        <div>
          <input type="text"  onChange={(e)=>InputAge(e.target.value)} /> <span>{age}</span>
       </div><br />
       <div>
        <input type="text" onChange={(e)=>InputCity(e.target.value)} /> <span>{city}</span>
       </div>
        
      
    </div>
  )
}

export default Events
