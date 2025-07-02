type User4 = {
    id: number,
    name: string,
    email: string,
    role: string
}


//partial
const partialUser:Partial<User4>={
    id:1,
    name:"Mahesh",
    role:"Admin"
}


//Readonly
const ReadonlyUser:Readonly<User4>={
    id:1,
    name:"Mahesh",
    email:"mj@gnail.com",
    role:"User"
}


//Exclude
type Role = "admin" | "editor" | "viewer" | "guest";
type ValidRoles = Exclude<Role, "guest">;
const role: ValidRoles = "admin"; // ✅

