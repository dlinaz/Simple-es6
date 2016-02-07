"use strict"

// let: limits variable to block scope

let x = 1;

if (true) {
  let x = 5;
  console.log( "value of x inside block: ", x); // 5
}

console.log( "value of x outside block: ", x); // 1



// const: creates immutable variables


const myConstant = 'can not change';
myConstant = 'can i udate?';

