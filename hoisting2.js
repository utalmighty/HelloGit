// Let, const are strict than var
console.log(v); // undefined
let l = 10;
var v = 20;
var v = 52; // no error
//let v = 25; // Error , already defined

var a = 100;
{
    var a =10; // Shadowing
    let b = 20;
    console.log(a); // 10
    console.log(b);
}
console.log(a); // 10
// console.log(b); // Refernce error

// let/const are defined in script object rather than window scope.

let b = 10; // We can think as field of script class
{
    var a = 10;
    let b = 20; // Here can be redeclared becuse it is in block (can think of an an field of block class)
    const c = 30;
    console.log(a);
    console.log(b); // 20
    console.log(c);
}
console.log(b); // 10

function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    return inner; // returning inner with its lexical scope values. 
}

var func = outer();
func(); // 10 beacuse inner was returned with its lexical scope
// This is called closures.Returning wiht parent lexical scope variables