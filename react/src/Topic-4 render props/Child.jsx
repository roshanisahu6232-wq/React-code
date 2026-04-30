import React from "react";
import Parent from "./Parent";

const Child=({ children })=>{
    console.log("children",children);

    return(
        <div id="children">
            {typeof children==="function"?children():children}

        </div>
    );
};
export default Child;