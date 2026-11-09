//* *typeof*

let x = 124

console.log(typeof x)

//* Type Guard 

const print = (value: string | number) => {
    if (typeof value === "string") {
        return value.toUpperCase()
    } else if (typeof value === "number") {
        return value
    } else {
        return value
    }
    
}

console.log(print("Sabbir Hossain ALIF"))

//* Truthiness

type User = {
    name: string,
    address?: {
        street: string
    }
} | null

const loggedInUser: User = {
    name: "Sabbir",
    address: {
        street: "CRR"
    }

}

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.street);
        console.log("Sabbir")
        return;
    }

    throw new Error("User not found");
};

showAddress(loggedInUser)
