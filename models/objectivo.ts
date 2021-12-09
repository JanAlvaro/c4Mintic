import mongoose from 'mongoose';
const{Schema , model} = mongoose;
import {Enum_TipoObjetivo} from './enums/enum'
import { ProjectModel } from './proyecto/proyecto';

interface Objective{
    description: string,
    tipo: Enum_TipoObjetivo,
    // proyecto: Schema.Types.ObjectId;

}

const objectiveSchema = new Schema<Objective>({
    description:{
        type: String,
        required : true,
    },
    tipo:{
        type:String,
        enum : Enum_TipoObjetivo,
        required: true,
    },
    // proyecto:{
    //     type: Schema.Types.ObjectId,
    //     ref: ProjectModel,
    // }

})

const ObjectiveModel = model("Objectivo", objectiveSchema);

export {ObjectiveModel};
