import { validationResult } from 'express-validator';
import Producto from '../models/producto';

export const listarProductos = async(req, res)=>{
    try {
        //buscar en la BD la collection de usuarios
        const productos = await Producto.find();
        //envio la respuesta al front end
        res.status(200).json(productos);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'Error al encontrar los productos'
        })
    }
}
export const obtenerProductos = async(req, res)=>{
    try {
        //extraer el id de la ruta
        console.log(req.params.id)
        //buscar en la BD el producto que coincide con el id
        const productoBuscado = 
       await Producto.findById(req.params.id)
        //responder con el producto encontrado
        res.status(200).json(productoBuscado);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'No se encontro el producto buscado'
        })
    }
}
export const crearProductos = async (req, res)=>{
    try {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errores: errors.array()
            })
        }
        console.log(req.body)
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje:'El producto fue creado con exito'
        })
        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:'ocurrio un error al intentar agregar un producto'
        })
    }}

    export const editarProducto = async( req ,res)=>{
        try {
            //extraer el parametro de la ruta y los datos que quiero actualizar
            //solicitar a la BD actualizar el producto
            await Producto.findByIdAndUpdate(req.params.id, req.body);
            //respondemos al frontend
            res.status(200).json({
                mensaje:'El producto fue editado con exito'
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                mensaje:'Error al intentar editar un producto'
            })
        }
    }
    export const borrarProducto = async(req,res)=>{
        try {
            //buscar el id de la ruta, luego pedir a la BD borrar ese producto
            await Producto.findByIdAndDelete(req.params.id);
            //enviar respuesta al frontend
            res.status(200).json({
                mensaje:'El producto fue borrado con exito'
            })
        } catch (error) {
            console.log(error);
            res.status(404).json({
                mensaje:'Error al intentar borrar un producto'
            })
        }
    }
    //tomar body y  validarlo

    //guardar ese objeto en la BD