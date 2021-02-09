//!UNION TYPE

const combine = function (
  input1: number | string,
  input2: number | string,
  resultType: string
) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if(resultType === 'as-number'){
     
    return +result
  }else{
    return result.toString();

  }
};

const combineAges = combine(20, 30, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "23", "as-number");
console.log(combineStringAges);

const combineName = combine("massarini", " diego", "as-text");
console.log(combineName);

//! LITERAL TYPES

const number = 2.9; // typescript understand that is not a number but exactly 2.8 because is a const , it'll never change
