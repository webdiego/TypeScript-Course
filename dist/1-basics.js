"use strict";
// let html :string WE SHOULD DO THIS IF WE INITIALIZE A VARIABLE EMPTY 
const number1 = 5;
const number2 = 2.2;
let prints = true;
const resultPhrase = "The result is ";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
add(number1, number2, prints, resultPhrase);
//# sourceMappingURL=1-basics.js.map