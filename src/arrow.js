"use strict"


// ES6 arrow functions
// When defining parameters, parentheses can be ommited if the parameters are single identifier

const arr = [1, 2, 3];
const squares = arr.map(x => x * x);

console.log (squares); // [ 1, 4, 9 ]


// es5: callbacks are relatively verbose

// var arr = [1, 2, 3];
// var squares = arr.map(function (x) { return x * x });

