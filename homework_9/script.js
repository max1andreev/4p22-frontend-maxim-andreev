'use strict'
function makeFibonacciFunction() { 
    let a = 0
    let b = 1
    return function () { 
        
       let c = a + b
        a = b
        b = c
        console.log(c)
} }


const fibonacci = makeFibonacciFunction();
    fibonacci(); 
    fibonacci(); 
    fibonacci(); 
    fibonacci(); 
