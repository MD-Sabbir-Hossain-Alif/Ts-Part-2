//* Literal Type

type Status = "panding";
const status: Status = "panding";
console.log(status);

//* Basic Union

type Identity = string | number;
let id: Identity;

id = "Sabbir";
console.log(id);
id = 10;
console.log(id);

//* Literal Union

type Role = "user" | "admin" | "manager";
const userRole: Role = "manager";
console.log(userRole);

//* Object Union

type Admin = { id: number; role: "admin"; previleges: string };
type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const user: User = {
    id: 123,
    role: "member",
    plans: ["play", "read", "hangout"],
};
