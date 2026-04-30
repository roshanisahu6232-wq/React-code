// !MODULES

//  function greet(){
//     console.log("Welcome");
    

// }
//  function demo(){
//     console.log("I am demo");
    
// }
// export {greet,demo};

// !default exports

//  function sum(n1,n2){
//     return n1+n2;
//  };
//  export default sum;

// !react exmple

export function useState(x){
    return[x,()=>{}];
}
export function useRef(x){
    return {current:x};
};