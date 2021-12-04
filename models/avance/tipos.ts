import {gql} from 'apollo-server-express';

const tiposAvance = gql`
type Avance{
    fecha: Date!
    descripcion : String!
    Observaciones: [String]
    proyecto : Proyecto!
    creadoPor: Usuario
}
type Query{
    Avances:[Avance]
}
type Mutation{
    crearAvance(
    fecha: Date!
    descripcion : String!
    proyecto : String!
    creadoPor: String!
    ):Avance

}   
`;
export {tiposAvance};