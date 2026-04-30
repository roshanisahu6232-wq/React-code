import React from "react";
import Child from "./Child";

const Parent=()=>{
    const user="Rohit"
    return(
        <div id="parent">
            <h3>Parent Component</h3>
            
            <Child user={user}>
                <h2>Hello dev</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, placeat?</p>
                Hii
            </Child>

        </div>
    );
};
export default Parent;