import {connect} from 'mongoose';

const conectarBD = async () =>{
    return await  connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('conexion exitosa ');
    }).catch(e=>{
        console.error("error conectando a BD",e);
    });
 
}

export default conectarBD;