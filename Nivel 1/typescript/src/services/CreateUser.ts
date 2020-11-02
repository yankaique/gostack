
interface CreateUserData{
    name?:string,
    email:string,
    password:string | number,
    techs: Array<string | TechObject> //string[]
}

interface TechObject{
    title: string,
    experience:number
}

export default function CreateUser({name = '', email, password}:CreateUserData):object{
    const user = {
        name,
        email,
        password
    }
    return user;
}
