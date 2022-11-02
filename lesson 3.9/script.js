'use strict'

// hoisting

// function sayHello() {
//     console.log('Hello From Declaration')
// }
// const sayHello2 = function () {
//     console.log('Hello From Expression')
// }
// const sayHello3 = () => {
//     console.log('Hello From Lamda Expression')
// }

// sayHello()
// sayHello2()
// sayHello3()


// let x= '5';


// function printX() {
//     console.log(x)
//     let x ='5';
// }
// printX()

//Closures

// let func;
// let i;
// for (let i=0; i<10; i++){
//     if (i===5){
//     func = function () {
//         console.log(i);
//         }

//     }
// }
// func()



// const button= document.getElementById ('button');

// const someVariable='Привет мир!';

//  button.addEventListener('click', function(){
//     console.log(someVariable);
//  });

// function foo(){
//     let i=10
    
//     return function() {
//         console.log(i)
//     }
// }


//Присвоение ссылки
// const person = {
//     firstName: 'Maks',
//     lastName: 'Andreev',
//     body: {
//         age: 23,
//         height: 171
//     }
// }

// const person2 = person;

// console.log(person2===person)


const person = {
        firstName: 'Maks',
        lastName: 'Andreev',
        body: {
            age: 23,
            height: 171
        }
    }
    console.log(person.body.age)