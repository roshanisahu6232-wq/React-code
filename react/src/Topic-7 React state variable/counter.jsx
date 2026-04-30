import React, { useState } from 'react';

export const counter = () => {

    const [count,setCount]=useState(()=>8);  //[initalvalue,updaterfunction]
    console.log(count);
    

    const handleclick=()=>{
        // setCount((prev)=>prev+1);
        // setCount((prev)=>prev+1);
        // setCount((prev)=>prev+1);// ek sath chalega 3 save hoga 

        console.log("clicked... "); 
        // setCount(count+1);
        
         
    };

  return (
    <div id="counter">
        {/* <h1>Count:{count}</h1> */}
        <button onClick={handleclick}>Add</button>
        
    </div>
  );
};
export default counter;
//refc