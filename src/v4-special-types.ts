//* Top Types

let helloWorld : any = "Hello World"
helloWorld = 123

helloWorld.length

const someting: unknown = "Sabbir"  //! Err: 'someting' is of type unknown
// someting.length

//* Core types

let someting2: unknown
const num : number = 123
someting2 = num


type Status = "pending" | "success"
let someStatus: string

let status : Status = "pending"

someStatus = status;


//* Nullish types 

interface User {
    name: string
}

type LoggedInUser = User | null

const currentUser: LoggedInUser = null;  //! Err: Type 'null' is not assignable to type "User"


//* Unit type

const greet = () =>  {
    console.log("Hello World")
}

greet()


//* sub-type of unit type

const anotherGreet = () => {
    console.log("Hello World");
    // return undefined
};

console.log(anotherGreet())
const greeting = anotherGreet()

console.log(greeting);

//* Bottom type

const getError = (msg: string) : never => {
    throw new Error(msg)
}

// const x: string = getError("ABC");