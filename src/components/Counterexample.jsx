import React, { useState } from 'react'

const Counterexample = () => {
    const [count , setcount] = useState(0); 
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>increase</button>
        <button onClick={()=> setcount(count-1)}>decrease</button>
        <button onClick={()=> setcount(0)}>Reset</button>
       
     
    </div>
  )
}

// function Counterexample()
// {
//     let count = 0;
//     function increase(){
//     count = count+1;
//     console.log(count);
//     }

//     return(
//         <>
//         <p>{count}</p>
//         <button onClick={increase}>count+</button>
//         </>
//     )
// }
export default Counterexample
