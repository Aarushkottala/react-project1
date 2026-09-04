import React, { useState } from 'react'

const DeleteItems = () => {
  const [technologies , setTechnologies] = useState(["HTML","CSS","JAVA SCRIPT","REACT","ANGULAR"]);
  return (
    <div>
      <h4> Delete Technologies</h4>
      <ul>
        {technologies.map((technology)=>(
          <li>
            {technology}
            <button className='btn btn-danger' onClick={()=>setTechnologies(technologies.filter((item)=>item!==technology))}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default DeleteItems
