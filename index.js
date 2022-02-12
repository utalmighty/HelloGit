console.log("hi");
var i= 15;
var p = `fdghf 

fyufitguyiyggufgf ${i}`;
console.log(p);


// let is block scoped (like varible in JAVA)
// var is function scope(if not defined in function then global scope)

let f = 15;
for(let a=0; a<5; a++) {
    let f = 65; // This is valid I dont know why strange
    console.log(a, f);
}
console.log(f);
//console.log(a); // error

for(var x=0; x<5; x++) {
    console.log(x);
}
console.log(x); // errror