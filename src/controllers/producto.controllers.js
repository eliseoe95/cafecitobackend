import Producto from '../models/producto';

export const listarProductos = async(req, res)=>{
    try {
        //buscar en la BD la collection de productos
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
    }
    //tomar body y  validarlo

    //guardar ese objeto en la BD
}