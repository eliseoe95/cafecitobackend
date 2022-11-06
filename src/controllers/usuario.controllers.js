import Usuario from '../models/usuario';
import { validationResult } from 'express-validator';

export const listarUsuarios = async(req, res)=>{
    try {
        //buscar en la BD la collection de productos
        const usuarios = await Usuario.find();
        //envio la respuesta al front end
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'Error al encontrar los usuarios'
        })
    }
}

export const crearUsuario = async(req, res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errores: errors.array()
            })
        }
        console.log(req.body)
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
            mensaje:'El usuario fue creado con exito'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:'ocurrio un error al intentar registrar un usuario'
        })
    }
}
export const loguearUsuario = async(req, res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errores: errors.array()
            })
        }
        console.log(req.body)
        const usuarioLogueado = await Usuario.find((req.body.email).exc());
        if(usuarioLogueado){
            if(req.body.contrasenia === usuarioLogueado.contrasenia){
                res.status(201).json({
                    mensaje:'El usuario fue creado con exito'
                })
            }else{
                res.status(404).json({
                    mensaje: 'El usuario o contraseña ingreado no es valido'
                })
            }
        }
        res.status(201).json({
            mensaje:'El usuario fue creado con exito'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:'ocurrio un error al intentar registrar un usuario'
        })
    }
}

