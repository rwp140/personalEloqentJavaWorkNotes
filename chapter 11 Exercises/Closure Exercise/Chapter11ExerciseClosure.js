//chapter 11 exercise "Closure"
//The way we have defined fun allows functions in Egg to “close over” 
//the surrounding environment, allowing the function’s body to use 
//local values that were visible at the time the function was defined, 
//just like JavaScript functions do.

//The following program illustrates this: function f returns a function
//that adds its argument to f's argument, meaning that it needs access 
//to the local scope inside f to be able to use variable a.

run("do(define(f, fun(a, fun(b, +(a, b)))),",
    "   print(f(4)(5)))");
// → 9

//Go back to the definition of the fun form and explain which mechanism causes this to work.

//---
//Because the returned function call evaluate, which can potentaily call the same function,
//set in specail forms, when parsed as an argument of the oriional fun call.
//its recursive, and the way java handles objects, functions, and prototypes means the 
//layered variables are avaialbe deaper into the layering. The second "fun()" 
//call has the passed arg of a avaialbe to it.
//