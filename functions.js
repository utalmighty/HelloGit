
// function are treated as first class citizen in JS
// function can be returned // yes you heard it right
// function can be passed as as arguments.

//Eg:
function outer(a, b){
    return function inner(){
        console.log(a+b);
    }
}

let returnedFunction = outer(5,3);
let returnedFunction2 = outer(15,5);

console.log("Function calls made");

console.log(returnedFunction); // here we have got the functions
console.log(returnedFunction2); // here we have got the functions
// returned object is function  
// try to understand the output.

returnedFunction(5, 5); // 8
returnedFunction2(); // 20
returnedFunction(); // 8

// note that the function which is returned is not computed while returning but computed when called
// Eg in output you will see   
// Function calls made
// 8
// 20
// 8
// note 8,20,8 is printed after the outer function call is made



let sayHi = function foo(name){ // this is called function Expression, therefore the foo name itself can be empty ie function ()
    console.log("HELLO", name);
} 
// this sayHi varible stores function object
// to call this function we need to call sayHi(), foo() will not be accessible
//foo(); // Error: not defined
sayHi("utkarsh") //HELLO utkarsh
sayHi() // HELLO undefined


// IIFE: Immediately invoke function execution


let func = (function (a, b){
    return a+b;
})(20, 50);
console.log(func);
// console.log(func(1, 15)); //Error: IFFEs are not reuseable 😑

function foo() {
    return 55;
}
console.log(foo);

function threeSum(num) {
    return num+num+num;
}

console.log(threeSum(3));
console.log(threeSum("Ab"));
console.log(threeSum());