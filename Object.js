let name = {};// ojects in JS are denoted by curly braces
// Empty Object
// JSON
console.log(name);

// There are two ways to access property of an object
let x = "PAPAYA";
console.log(x.length); // dot notation
console.log(x["length"]); // square notation

let person = {
    name: "utkarsh",
    age:22
}
console.log(`Hey ${person.name} thank you for Signing`);

let crush = {
    firstName: "Garima",
    lastName: "Khare",
    age: 22,
    isCute: true,
    address: {
        state: "Uttar Pradesh",
        city: "Lucknow"
    },
    sayHi: function(){
        console.log(`Hello I am ${this.firstName} ${this.lastName} childhood crush of Utkarsh Jaiswal.`)
    }
}
crush.sayHi();

// "in" keyword in JS
// Kind of same as Python (but prints just the keys instead of values)
for(let i in crush) {
    console.log(i, crush[i]); // will print keys in object and their value 
    // Here we have to use square notation we can not use dot notation here😉.
    // We use bracket notation when the key is variable like in array and there we can not use . notation
    // [] notataion the values is evaluated first.
}
let arr = [8,6,4,8,41,15];

for(let i in arr){
    console.log(i);
}
console.log(arr.length);
