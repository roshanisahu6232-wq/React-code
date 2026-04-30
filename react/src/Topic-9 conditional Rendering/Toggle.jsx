import React, { useState } from 'react'

 const Toggle = () => {
    
    const [login,setLogin]=useState(false);
    
    
     const handleClick=()=>{
       setLogin(!login);
     };
    
     return (
       <div>
          {login? <h1>Welcome user</h1> : <h1>Plz Login</h1>}
    
           <button onClick={handleClick}>Toggle</button>
       </div>
     )
};
export default Toggle;