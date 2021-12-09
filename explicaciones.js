import conectarBD from "./db/db"; 
import {UserModel} from './models/user';
import {Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo} from './models/enum';
import { ProjectModel } from "./models/project";
import {ObjectiveModel} from './models/objective';


const main = async() =>{
    await conectarBD(); 
    const usuarioInicial = await UserModel.create({
        nombre: 'Daniel',
        apellido: 'Saldarriaga',
        correo: 'dsl@cc.com',
        identificacion: '4321',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });
    const proyecto = await ProjectModel.create ({
        nombre:"Proyecto6",
        presupuesto:121,
        fechaInicio:Date.now(),
        fechaFin: new Date ("2022/11/10"),
        lider: '6195525d211f90529e8ec12d',
        objetivos:[
            {descripcion:"este es el objetivo general", tipo: Enum_TipoObjetivo.general},
            {descripcion:"este es el objetivo esp1", tipo: Enum_TipoObjetivo.especifico},
            {descripcion:"este es el objetivo esp2", tipo: Enum_TipoObjetivo.especifico},
        ]
    
    })
    // const proyecto:any = await ProjectModel.find({nombre: 'Proyecto4'}).populate('objetivos');
    // console.log('los obj son ', JSON.stringify(proyecto));
    

    // const object = await ObjectiveModel.create({
    //     description:'este es el obj especifico',
    //     tipo: Enum_TipoObjetivo.especifico,
    // });

    // const proyecto:any = await ProjectModel.find({nombre: 'Proyecto4'}).populate('lider');
    // console.log('El proyecto es:' ,proyecto);

    // const proyecto:any = await ProjectModel.find({nombre: 'Proyecto4'});
    // console.log('El proyecto es:' ,proyecto , proyecto[0].lider);

    // const lider = await UserModel.find({ _id: proyecto[0].lider});
    // console.log('el lider', lider);  


    // const usuario = await UserModel.find({ id: '6195525d211f90529e8ec12d'});
    // console.log('usuarioes ', usuario);
    
    
    
    

    // ProjectModel.create({
    //     nombre:"Proyecto5",
    //     presupuesto:120,
    //     fechaInicio:Date.now(),
    //     fechaFin: new Date ("2022/11/10"),
    //     lider: '6195525d211f90529e8ec12d',
    //     objetivos:['61a4a25033d6add412b60a81','61a4a2233154449e528bb2d4']
    // })
    //CREAR USUARIO
    // await   UserModel.create({
    //         correo:"jan11@jan.com",
    //         identificacion:"001234",
    //         nombre:"Jan",
    //         apellido:"Mazorco",
    //         rol:Enum_Rol.administrador,
    // }).then(u=>{
    //     console.log("usuario creado",u);
        
    // }).catch(e=>{
    //     console.error("error creando usuario", e);
        
    // })
    //BUSCAR UN USUARIO
    // await UserModel.find()
    //     .then((u)=>{
    //         console.log('usuarios',u);            
    //     })
    //     .catch((e)=>{
    //         console.error('error obteniendo los uuaurios',e);
    //     })
    //OBTENER UN USUARIO
    // await UserModel.findOne({identificacion:'1234'})
    //     .then((u)=>{
    //         console.log('usuario encontrado',u);
    //     })
    //     .catch((e)=>{
    //         console.error('error buscando usuario ', e);
            
    //     })
    //EDITAR UN USUARIO
    // await UserModel.findOneAndUpdate(
    //     {correo:'jan@jan.com'},
    //     {nombre:'Pip',
    //     apellido:'Sss'}
    //     ).then((u)=>{
    //        console.log('usuarios actulaizado',u);            
    //     })
    //     .catch((e)=>{
    //          console.error('error actualizndo los uuaurios',e);
    //     })
    //ELIMINAR UN USUARIO
    // await UserModel.findOneAndDelete({correo:'jan@jan.com'})
    // .then((u)=>{
    //     console.log('usuario eliminado',u);        
    // })
    // .catch((e)=>{
    //     console.error(e);        
    // })

}

main();