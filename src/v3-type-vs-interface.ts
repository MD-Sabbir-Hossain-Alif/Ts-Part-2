//* type alias vs interface

//? Interface is geneally connected to objects
//? type alias is more connected to literals, unions, tuples, primitives

type ID = number

//! interface id = number

// type Role = "admin" | "member"

//!  interface  "admin" | "member"

interface User  {
    id: ID,
    name: string,
    role: "admin" | "member"
}

const user: User = {
    id: 123,
    name: "Sabbir",
    role: "admin"
}


// TODO: interface

interface Animal {
    species: string
}

interface Cat extends Animal  {
    bread: string
}

const cat: Cat = {
    species: "Felix Catus",
    bread: "Persian",
}


type Vehicle =  {
    brand: string
}

type Car = Vehicle & {  //? "&" symbol is used to perform intersection(like "extend")
    model: string
}

const car: Car = {
    brand: "Toyota",
    model: "Corolla"
}


//* Same name & dupliqed 

interface IEmployee {
    id: number
} 

interface IEmployee {
    name: string
}

//! This is not valid (Error: Duplicate indentifier)
// type TEmployee = {
//     name : string
// }
// type TEmployee = {}; 


const employee: IEmployee = {
    id: 123,
    name: "Sabbir"
}