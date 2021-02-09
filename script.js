//! VOID VS UNDEFINED
var additional = function (n1, n2) {
    //adding after arguments the type, we explicity set the return value type
    return n1 + n2;
};
var printResult = function (num) {
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
var combineValues;
//Writing this , we explicity say that combineValuse should be a function with 2 argument with the types of numbers , and we want the return value as a number
combineValues = additional; //so in this case we satisfy this type
//! combineValues = printResult // here no because printResult takes yes number but only one argument
console.log(combineValues(9, 9));
