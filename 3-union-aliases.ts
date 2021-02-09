//!UNION TYPE & ALIASES

type Combinable = number | string
type CombinableDescription = 'as-number' | 'as-text'


const combine = function (
  input1: Combinable ,  // number | string,
  input2: number | string,
  resultType:  CombinableDescription,// string // we can also can be more strict using 'as-number' | 'as-text'
) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number" || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if(resultType === 'as-number'){
     
  //   return +result
  // }else{
  //   return result.toString();

  // }
  return result
};

const combineAges = combine(20, 30, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "23", "as-number");
console.log(combineStringAges);

const combineName = combine("massarini", " diego", "as-text");
console.log(combineName);

//! LITERAL TYPES

const number = 2.9; // typescript understand that is not a number but exactly 2.8 because is a const , it'll never change
