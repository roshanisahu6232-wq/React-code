//! 1)ARROW function
// function demo(){
//     console.log("I am demo function");
    
// }
// demo();

// const fun=function(){
//     console.log("Function expression");  
// }
// fun();

// const sum=function(a,b){
   
//     let res=a+b;
//     return res;
// }
// let v1=sum(60,10);
// console.log(v1);

// let username;
// console.log(username);

// const a1 = () => {
//     console.log("Hello");

// };
// console.log(a1);
 
// const a2=(username)=>{
//     console.log(username);
    

// }
// a2("John");
// // return -->1)implicit 2)explicit

// const a3=()=>{ return "Explicit";}
// console.log(a3());


// const a4=()=>"Implicit"
// console.log((a4()));

// const a5=()=>{
//     return {data:"Hello world"}
// }
// console.log(a5());

// const a6=()=>({data:"Hello guys"});
// console.log(a6());
    

// let a1=10;
// a1();             //=====>a1 is not a function


// !2)DESTUCTURING


// let arr1=[10,20,30,40];
// let [a1,a2,a3,a4]=arr1;
// console.log(a1,a4);

// let obj1={id:1,name:"john",age:20};
// let{age, salary="NA",ename:username}=obj1;
// console.log(age,salary,username);


//! 3)REST AND SPREAD
// for packing and unpacking of a ARRAY
// used to copy array elements and object's property
// syntax=...variableName

// let arr1=[10,20,30,40,50];
// console.log(arr1);
// console.log(...arr1); //spread -->10,20,30,40,50 (unpack)

// let arr2=[...arr1];//<----REST (pack)
// console.log(arr2); //[10,20,30,40,50]
// let obj1={id:1,ename:"john"};
// let obj2={...obj1,salary:50000};
// console.log(obj2);

// let name="username";
// let value="john";
// let salary=90000;

//  let formData={
//     [name]:value,
//     email: "xyz@gmail.com",
//     password:"12345",
//     salary,
//  };
//  console.log(formData);
 


// !4)ARRAY METHODS
// Map(),forEach(),Filter(),find(),findIndex(),reduce()

// let arr=[10,20,30,40,50];
// let arr1=arr.map((ele,index,array)=>{
//    console.log(ele,index,array);
//    return ele+5;
   
// });
// console.log(arr1);
// console.log("=====================");


// // !forEach========= return undifined

// let arr2=arr.forEach((ele,index,array)=>{
//    console.log(ele,index,array);
//    return ele+5;
   
// });
// console.log(arr2);
// console.log("=====================");

// let arr4=[60,10,20,30,90,100];
// // !filter:- used to filter out the array which satisfy the condition,return new filtered array.

// let arr6=arr4.filter((ele,)=>{

//    return ele>20;
   
// });
// console.log(arr6);
// console.log("=====================");

// // !find :- used to find first occurance of the  element which satisfy the condition ,return single value

// let arr7=arr4.find((ele,)=>{

//    return ele>20;
   
// });
// console.log(arr7);
// console.log("=====================");

// // !findIndex:- return the index of the first element in the array where predicate is true ,and -1 otherewise

// let arr8=arr4.findIndex((ele,)=>{

//    return ele>20;
   
// });
// console.log(arr8);
// console.log("=====================");

// // !reduce(callback,accumulatorvalue):-
// // incallback function we are having 4 parameters
// // 1) accumulatorvalue
// // 2)element
// // 3)index
// // 4)array

// let arr10=[10,20,30,40,50];
// let var1=arr10.reduce((acc,ele,ind,arr)=>{

//    return acc+ele;
// },0);
// console.log(var1);



//! 5)MODULES:1)Named 2)default
// import {greet,demo} from "./utilities.js";
// greet();
// demo();
// import * as utilities from "./utilities.js";
// utilities.greet();
// utilities.demo();
// import {greet as welcome,demo} from "./utilities.js";
// welcome();

// !2)default
// import sum from "./utilities.js";
// console.log(sum(10,20));

// !react exmple
import { useState,useRef } from "./utilities.js";
let [state,setState]=useState(0);
console.log(state);
console.log(setState);

let ref=useRef();
console.log(ref);




// !6)TEMPLATE LITERALS