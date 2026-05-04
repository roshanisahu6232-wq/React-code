import React from "react";
import Parent from "./Parent";

const Child=({username,age,state})=>{
    return(
        <div >
            <p>{username}</p>
            <p>{age}</p>
            <p>{state}</p>
        </div>
    )
}
export default Child;