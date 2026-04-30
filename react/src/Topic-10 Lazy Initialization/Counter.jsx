import React, { useState } from 'react';

const heavyCalculation=()=>{
    let sum=0;
    for(let i=0;i<1000;i++){
        sum=sum+i;
    }
    return sum;
}

export const Counter = () => {
    const [count,setCount]=useState(()=>heavyCalculation())


  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
};
export default Counter;
