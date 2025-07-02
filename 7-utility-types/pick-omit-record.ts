
type User2 = {
    id: number;
    name: string;
    email: string;
    role: "admin" | "editor" | "viewer";
    password: string;
};

//pick
type DisplayUser = Pick<User2, "id" | "name" | "role">;
const user1: DisplayUser = {
    id: 1,
    name: "Mahesh",
    role: "admin"
};

//omit
type EditableUser = Omit<User2, "id" | "password">;
const userEdit: EditableUser = {
    name: "Mahesh",
    email: "m@example.com",
    role: "editor"
};

//Record
type UserRoleMap = Record<string, User2>;
const roles: UserRoleMap = {
    Mahesh:{ 
        id:10,
        name:"Mahesh",
        email:"abc@gmail.com",
        role:"admin",
        password:"Mahesh@123"
    },
    Suresh:{ 
        id:10,
        name:"Mahesh",
        email:"abc@gmail.com",
        role:"editor",
        password:"Mahesh@123"
    },
    Raj:{ 
        id:10,
        name:"Mahesh",
        email:"abc@gmail.com",
        role:"viewer",
        password:"Mahesh@123"
    }
};
