// Primitive
 // 7 types : String,number,boolean,Null,Undefined,Symbol,BigInt
 const score = 100
 const scoreValue = 100.3
 
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail = undefined;
 const id = Symbol('123')
 const anotherId = symbol('123')
 console.log(id === anotherId);
 // const bigNumber = 678995432111n
 
 
  // Reference (Non primitive)
   // Array, Objects,Functions
   const heros = ["shaktiman","maagraj","doga"]
   let myObj = {
       name:"priyanka",
       age: 22,
   }
   const myFunction = function(){
     console.log("hello world");
   }
   console.log(typeof scoreValue);