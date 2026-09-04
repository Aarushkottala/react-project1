import React, { useState } from 'react'

const CharacterCounter = () => {
    const [text , setText] = useState("");
  return (
    <div>
        <h3>Character Counter</h3>
        <textarea placeholder='Type something' value={text} onChange={(text)=>setText(text.target.value)}>

        </textarea>
        <p>Characters :{text.length}</p>
      
    </div>
  )
}

export default CharacterCounter
