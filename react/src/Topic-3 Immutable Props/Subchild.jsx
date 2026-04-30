import React from "react";

const Subchild=(props)=>{
    console.log("Subchild Props",props);
    return(
        <div>
            <h2>Subchild Component</h2>
            <h4>Username:{props.props.user.username}</h4>
        </div>
    );

    
};
export default Subchild;