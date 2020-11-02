import {Request,Response} from 'express';
import CreateUser from './services/CreateUser';

export function HelloWorld(request:Request,response:Response){

    const user = CreateUser({
        email:"yan_bambam@gmail.com",
        password:"oi",
        techs:["react","react-native",{title:"Javascript", experience:100}]
    });

    return response.json({message:'Hello World'})
}