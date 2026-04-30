import React,{useState} from 'react'

export const Home = () => {
    

    const[login,setLogin]=useState(true);

    if(!login)
    {
        return ( <div>
                     <h1>Plz Login.......!</h1>
                     <button onClick={()=>setLogin(!login)}>button</button>
                 </div>
                );
    };



      return (
        <div>
            <h1>Welcome to home page</h1>
            <button onClick={()=>setLogin(!login)}>button</button>
        </div>
      );
};
export default Home;
