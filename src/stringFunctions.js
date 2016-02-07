"use strict"

const newString = "Hello world"


// startsWith()

newString.startsWith("he"); //true

// second parameter -> position to begin searching

newString.startsWith("el", 1); //true


newString.startsWith("el", 2); //false





// includes()

newString.includes("ell"); //true



// second parameter -> position to begin searching


newString.includes("el", 1); //true

newString.includes("el", 2); //false







// endsWith()


newString.endsWith("rld"); //true

// second parameter -> clip string to this length

newString.endsWith("orl", 1 ); //false

newString.endsWith("orl", newString.length - 1); //true





// repeat() -> repeat string for specified number of times

"doo ".repeat(3); //'doo doo doo '