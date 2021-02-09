"use strict";
// const person: {
//   name: string,
//   age: number;
//   hobbies: []
// } = {
const person = {
    name: 'diego',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
let favoriteHobbies;
favoriteHobbies = ['sport'];
person.role.push('admin');
//-- person.role[1]= 2 WE CANNOT ASSIGN A NUMBER FOR THE SECOND ELEMENT
//-- person.role = []  Not allowed
//-- person.role [0 , 'admin' , 3 element] == not allowed
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map() ); ERROR BECAUSE TS KNOWS THAT HOBBY IS A STRING, SO WE HAVE ACCESS TO ALL STRING.METHODS NOT ARRAY.METHODS
}
//? ENUM
//--INSTEAD OF: const ADMIN = 0 , READ_ONLY = 1 , CONST AUTHOR=2 WE CAN USE ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // ADMIN IS 0 , READ_ONLY 1..
//enum Role {ADMIN = 10 , READ_ONLY = 20, AUTHOR ='DIEGO' }; // WE CAN ASSIGN MY OWN VALUES
const student = {
    name: 'diego',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (student.role === Role.ADMIN) {
    console.log(`yes is a : ${Role.ADMIN}`);
}
//? ANY
//-- WE CAN STORE ANY TYPE, GIVES YOU THE SAME OF JS , SO IS BETTER TO AVOID
//# sourceMappingURL=2-obs-array-enum.js.map