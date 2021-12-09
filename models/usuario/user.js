import mongoose from 'mongoose';
// import {Enum_Rol,Enum_EstadoUsuario} from '../enums/enum.js'

const{Schema , model} = mongoose;

// interface User{
//     correo:string;
//     identificacion:string;
//     nombre:string;
//     apellido:string;
//     rol:Enum_Rol;
//     estado:Enum_EstadoUsuario;
// }

const userSchema = new Schema({
    correo:{
        type:String,
        required: true,
        unique:true,
        validate:{
            validator:(email)=>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                // if(email.includes("@")&& email.includes(".")){
                //     return true;
                // }else {
                //     return false;
                // }
            },
            message: 'El formato del correro electronico esta malo.',
        },
    },
    identificacion:{
        type:String,
        required: true,
        unique: true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true,
        enum:['ESTUDIANTE','LIDER','ADMINISTRADOR'],
    },
    estado:{
        type:String,
        enum:['PENDIENTE','AUTORIZADO','NO_AUTORIZADO'],
        default:"PENDIENTE",
    }

});

const UserModel = model('User',userSchema);
export {UserModel};