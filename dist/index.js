"use strict";
let age = 20;
console.log("Age is", age);
//array
let number = [1, 2, 3, 4, 5];
console.log(number);
//object obj: {property1:type1 ; property2:type2} = {value1, value2}
let person = { name: "Abir", age: 25 };
console.log(person.age);
//function
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 2));
//Built-in types//
//any
let val = 10;
val = "Abir";
console.log(val);
//void
function print(message) {
    console.log(message);
}
print("Hello");
// //never
// function error(message: string): never{ //return never (throw error)
//     throw new Error(message)
// }
// error("Errornot found")
//null and undefined
let n = null;
let u = undefined;
//enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let user = Role.User;
console.log(user);
//tuple - fixing type
let tuple = [1, "Abir"];
console.log(tuple);
let userID = 1;
let userID2 = "abir";
console.log(userID, userID2);
let admin = {
    name: "Abir",
    age: 25
};
console.log(admin);
//union type - allow multiple type for one variable
let mixed;
mixed = "Abir";
mixed = 10;
console.log(mixed);
//literal type - fixed value/values set
let color;
color = "red";
let User = { name: "Abir", age: 25 };
//generics
function add(value, value2) {
    return [value, value2];
}
let num = add("Abir", 25);
console.log(num);
//class
class abd {
    constructor(value) {
        this.a = value;
    }
    getData() {
        return this.a;
    }
}
let ndata = new abd("Abir");
console.log(ndata);
console.log(ndata.getData());
