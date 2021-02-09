"use strict";
//! VOID VS UNDEFINED
const additional = function (n1, n2) {
    //adding after arguments the type, we explicity set the return value type
    return n1 + n2;
};
let printResult = function (num) {
    console.log("Result is " + num);
    //Void: when we not return anything, in js we get UNDEFINED as a value , we can use undefine as type but not in the function because TS expect a return , a undefine return
    //WE DON'T HAVE TO EXPLICITY ASSIGN A TYPE OF VOID BECAUSE TS IS GOING TO SET IT
};
printResult(additional(2, 2));
//! FUNCTION TYPES
//1
// let combineValues : Function;
// combineValues = additional;
//? combineValues = 5 Error because we cannot assign this value because we assigned to type of function
//?combineValues = printResult , in this case TS is not complain about the type but we get undefine because he doesn't take two argument 
//2
let combineValues;
//Writing this , we explicity say that combineValue should be a function with 2 argument with the types of numbers , and we want the return value as a number
combineValues = additional; //so in this case we satisfy this type
//! combineValues = printResult // here no because printResult takes yes number but only one argument
console.log(combineValues(9, 9));
//-- CALLBACK FUNCTION
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
//instead of writing in this callback result:num we set before when we create the function
addAndHandle(2, 3, (result) => {
    console.log(result);
    //setting the callback void , we say that the result/return value of the cb it'll be cannot used because is set void
});
const button = document.querySelector('button');
//because button can be null , because TS cannot read html, we can avoid the error with the ! or without but with the if statement
button.addEventListener('click', () => {
    console.log('clicked');
});
//# sourceMappingURL=script.js.map