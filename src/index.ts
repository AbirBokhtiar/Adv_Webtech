let age:number = 20
console.log("Age is", age)

//array
let number:number[] = [1,2,3,4,5]
console.log(number)

//object obj: {property1:type1 ; property2:type2} = {value1, value2}
let person:{name: string; age: number} = {name: "Abir", age: 25}
console.log(person.age)

//function
function sum(a:number, b:number): number  //sum(a, b) implicit(expect any value)
{
    return a+b
}
console.log(sum(5, 2))

//Built-in types//

//any
let val: any = 10
val = "Abir"
console.log(val)

//void
function print(message: string): void{ //return nothing
    console.log(message)
}
print("Hello")

// //never
// function error(message: string): never{ //return never (throw error)
//     throw new Error(message)
// }
// error("Errornot found")


//null and undefined
let n: null = null
let u: undefined = undefined

//enum
enum Role{
    Admin,
    User,
    Guest
}
let user: Role = Role.User
console.log(user)

//tuple - fixing type
let tuple:[number, string] = [1, "Abir"]
console.log(tuple)

//type alias - type define one time, reuse multiple time

type id = number | string
let userID:id = 1
let userID2:id = "abir"
console.log(userID, userID2)

type Admin = {
    name: string,
    age: number
}
let admin: Admin = {
    name: "Abir",
    age: 25
}
console.log(admin)


//union type - allow multiple type for one variable
let mixed: number | string
mixed = "Abir"
mixed = 10
console.log(mixed)

//literal type - fixed value/values set
let color: "red" | "green" | "blue"
color = "red"
// color = "yellow" //error

//interface
interface Person{
    name: string,
    age: number,
    address?: string  //optional
}

let User:Person = {name: "Abir", age: 25}

//generics

function add<T,U> (value: T, value2: U): [T,U]
{
    return [value, value2]
}

let num = add<string, number>("Abir", 25)
console.log(num)

//class

class abd<T>{
    private a
    constructor(value:T){
        this.a = value
    }

    getData():T {
        return this.a
    }
}

let ndata = new abd<string>("Abir")
console.log(ndata)
console.log(ndata.getData())