import React, { useState } from 'react'

const AddItems = () => {
  const [technology , setTechnology] = useState("");
  const [technologies , setTechnologies] = useState([]);
  return (
    <div>
      <h4>Add Technologies</h4>
      <input type="text" placeholder='Enter technology' value={technology} onChange={(t)=> setTechnology(t.target.value)}/>
      <button className='btn btn-primary' onClick={()=>{ 
        if(technology.trim()!=="")
        {
          setTechnologies([...technologies,technology])
          setTechnology("");
        }
        }}> Add</button>
        <ul>
          {technologies.map((item)=>(
            <li>{item}</li>
          ))
            
          }
        </ul>
      
    </div>
  )
}

export default AddItems
