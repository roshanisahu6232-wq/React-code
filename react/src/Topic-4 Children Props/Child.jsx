import Parent from "./Parent";

const Child=(user,children)=>{
    // console.log("Child props:",props);
    // const {children,user}=props;
    
    return(
        <div id="child">
            <h2>user:{user}</h2>
            {children }
           

        </div>
    );
};
export default Child;