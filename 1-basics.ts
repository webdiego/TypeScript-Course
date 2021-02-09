// let html :string WE SHOULD DO THIS IF WE INITIALIZE A VARIABLE EMPTY 

const number1 = 5;
const number2 = 2.2;
const printResult = true;
const resultPhrase = "The result is ";

const add =function (n1: number, n2: number, showResult: boolean, phrase: string) {

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}


add(number1, number2, printResult, resultPhrase);


//OBJECT TYPE
