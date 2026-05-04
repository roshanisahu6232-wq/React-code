import {useState,useEffect} from 'react';

 const Toggle = () => {
    const [login,setLogin]=useState(false);
    
    useEffect(()=>{console.log("2. useEffect")},[]); 

    console.log(" 1.Toggle Render");
    
   
     return (
         <div>
            {login? <h2>Welcome User</h2>: <h2>Please Login</h2>}
            <button onClick={() => setLogin(!login)}>Click</button>
         </div>
     );
};
export default Toggle;
