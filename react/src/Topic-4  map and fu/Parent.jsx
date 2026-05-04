import React from 'react';
import Child from './Child';

export const Parent = () => {

    const users=[
        {username:"Chombu",age:22,state:"UP"},
        {username:"Allu",age:23,state:"Mp"},
        {username:"Bettu",age:24,state:"UK"},
        {username:"Chotu",age:25,state:"Bihar"},
    ]
    
  return (
    <div>
        <h2>Parent component</h2>
    
        {
            users.map(element=> <Child key={index} {...element}/>)
        }
    </div>
    
  );
};
export default Parent;
