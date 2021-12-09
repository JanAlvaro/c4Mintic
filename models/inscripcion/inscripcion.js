import mongoose from 'mongoose';
const{Schema , model} = mongoose;
// import { Enum_EstadoInscripcion } from '../enums/enum.js';
import { UserModel } from '../usuario/user.js';
import {ProjectModel} from '../proyecto/proyecto.js'

// interface Inscription{
//     proyecto: Schema.Types.ObjectId;
//     estudiante: Schema.Types.ObjectId;
//     estado: Enum_EstadoInscripcion;
//     fechaIngreso: Date;
//     fechaEgreso: Date;

// }

const inscripcionSchema = new Schema({
    estado:{
        type: String,
        enum : ['ACEPTADO','RECHAZADO','PENDIENTE'],
        default: 'PENDIENTE',
        required: true,
    },
    fechaIngreso:{
        type:Date,
        required:false,
    },
    fechaEgreso:{
        type:Date,
        required:false,
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        requierd: true,
        
    },
    estudiante:{
        type : Schema.Types.ObjectId,
        ref:UserModel,
        required:true,
    },

})

const InscriptionModel = model ('Inscripcion',inscripcionSchema );
export {InscriptionModel};