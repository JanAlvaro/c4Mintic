import mongoose from 'mongoose';
const{Schema , model} = mongoose;
import { ProjectModel } from '../proyecto/proyecto.js';
import { UserModel } from '../usuario/user.js';

// interface Avance{
//     proyecto: Schema.Types.ObjectId;
//     fecha: Date;
//     descripcion: string;
//     observaciones: [string];
//     creadoPor: Schema.Types.ObjectId;
// }

const avanceSchema = new Schema({
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type: String,
        required: true,        
    },
    observaciones:[
        {
            type:String,
        },
    ],
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required : true,
    },
    creadoPor:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }
})

const ModeloAvance = model ('Avance', avanceSchema);
export{ModeloAvance};