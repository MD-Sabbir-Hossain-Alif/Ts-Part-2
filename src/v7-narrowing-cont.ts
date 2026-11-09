//* some caveat of Type Guard

// const prinAll = (x: string | string[] | null) => {
//     if (x && typeof x === 'object') {
//         for(let str of x) {
//             console.log(str)
//         }
//         return
//     } else if(typeof x === "string") {
//         console.log(x)
//          return
//     } else{
//         console.log("")
//     }
// }

// prinAll(null)

//* Equality

const compare = (x: number | string, y: number | boolean) => {
    if (x === y) {
        console.log(x, y);
    }
    console.log(x, y);
};

compare(40, 50);

const prinAll = (x: string | string[] | null) => {
    if (x !== null && typeof x !== "string") {
        for (let str of x) {
            console.log(str);
        }
        return;
    } else if (typeof x === "string") {
        console.log(x);
        return;
    } else {
        console.log("");
    }
};

prinAll(null);

//* "in" operatar

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};

const sparrow: Bird = {
    fly: () => console.log("A bird is flying in the sky 🕊️"),
};

const goldfish: Fish = {
    swim: () => console.log("The fish is swimming in the water. 🐟"),
};

move(sparrow);
move(goldfish);

//* "instanceof" check

// const date = new Date()
// const arr = new Error("Something went wrong")

// console.log(date instanceof Error);
// console.log(arr instanceof Date)

const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toDateString());
};

showDate("12-14-1992");

//* Discriminated uino

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

const getArea = (shape: Circle | Square) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
        return;
    } else {
        console.log(shape.sideLength);
    }
};

getArea({ kind: "circle", radius: 20 });
