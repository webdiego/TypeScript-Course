//! UNKNOW

let userInput: unknown;
//we don't know what will be the type of the value
//we can store any value without get any errors
//could be similar to :any or without givin a value/type

let user: unknown;
let userName: string;
//if we use any: we don t get an error like with unknown because any is more flexible, disable all types checking
//Unknown: is a type of value that we don't know what will be, we have to add some type checking (if else) to be sure that with the value that we get we can do something specifically

// let userName :string //-- we get an error in this case because we set user unknown but than we set equal to username that is a string type
// userName = user

//we have to add type checking

if (typeof user === "string") {
  userName = user;
}

//! NEVER
//IS A TYPE FUNCTION THAT RETURN

function generateError(message: string, code: number):never {
  throw { message: message, errorCode: code };
}
//this function is never return anything , even undefined because this function essentialy crash or break as script or that part of the script
//-- Example an infinite loop
// generateError('An error', 5)

console.log('hello'); 