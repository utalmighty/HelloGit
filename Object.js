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
        State: "uttar Pradesh",
        city: "Lucknow"
    },
    sayHi: function(){
        console.log(`Hello I am ${this.firstName} ${this.lastName} childhood crush of Utkarsh Jaiswal.`)
    }
}
crush.sayHi();