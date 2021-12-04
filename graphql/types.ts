import {gql} from 'apollo-server-express';
import {tiposEnum} from '../models/enums/tipos';
import {tiposUsuario} from '../models/usuario/tipos';
import {tiposProyecto} from '../models/proyecto/tipos';
import {tiposAvance} from '../models/avance/tipos';

const tiposGlobales = gql`
    scalar Date

    # enum Enum_EstadoUsuario{
    #     PENDIENTE
    #     AUTORIZADO
    #     NO_AUTORIZADO

    # }
    # enum Enum_Rol{
    #     ESTUDIANTE
    #     LIDER
    #     ADMINISTRADOR
    # }
    # enum Enum_EstadoProyecto{
    #     ACTIVO
    #     INACTIVO
    # }
    # enum Enum_FaseProyecto{
    #     INICIADO
    #     DESARROLLO
    #     TERMINADO
    #     NULO    
    # }
    # enum Enum_TipoObjetivo{
    #     GENERAL
    #     ESPECIFICO
    # }

    # type Usuario{
    #     _id:ID!
    #     nombre : String!
    #     apellido:String!
    #     identificacion:String!
    #     correo:String!
    #     estado: Enum_EstadoUsuario
    #     rol: Enum_Rol!
    # }

    # type Objetivo {
    #     _id:ID!
    #     descripcion: String!
    #     tipo:Enum_TipoObjetivo!
    # }
    # input crearObjetivo{
    #     descripcion: String!
    #     tipo:Enum_TipoObjetivo!
    # }
    # type Proyecto{
    #     _id:ID!
    #     nombre:String!
    #     presupuesto: Float!
    #     fechaInicio :Date!
    #     fechaFin :Date!
    #     estado: Enum_EstadoProyecto!
    #     fase: Enum_FaseProyecto!
    #     lider: Usuario!
    #     objetivos:[Objetivo]

    # }
    # type Query{
    #     Usuarios:[Usuario]
    #     Usuario(_id:String!): Usuario
    #     Proyectos:[Proyecto]
    # }
    # type Mutation{
    #     crearUsuario(
        
    #         nombre : String!
    #         apellido:String!
    #         identificacion:String!
    #         correo:String!
    #         estado: Enum_EstadoUsuario
    #         rol: Enum_Rol!
    #     ):Usuario

    #     editarUsuario(
    #         _id: String!
    #         nombre : String!
    #         apellido:String!
    #         identificacion:String!
    #         correo:String!
    #         estado: Enum_EstadoUsuario
    #         rol: Enum_Rol!
    #     ):Usuario

    #     eliminarUsuario(_id: String,correo :String):Usuario
    
    #     crearProyecto(
    #         nombre:String!
    #         presupuesto: Float!
    #         fechaInicio :Date!
    #         fechaFin :Date!
    #         estado: Enum_EstadoProyecto!
    #         fase: Enum_FaseProyecto!
    #         lider: String!
    #         objetivos:[crearObjetivo]
    #     ):Proyecto
    
    # }
`;

export const tipos =[tiposGlobales , tiposEnum , tiposUsuario, tiposProyecto, tiposAvance];