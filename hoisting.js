console.log(x);
greet();
//foo();
function greet() {
    console.log("Hello");
}
var foo = function () {
    console.log("HOHO");
}
var x = 10;
// OUTPUT
// undefined
// Hello
// undefined
function outer() {
    // Outer have access to global and itself execution context.
    inner();
    function inner() {
        // Inner have access to outer's, global's and inner execution context data=> Scope Chaining
        console.log(b);
    }
}

var b = 10;
outer();
console.log(b);
//inner(); // FYI: Inner Function not accessible outside the scope

//Output
// 10
// 10
