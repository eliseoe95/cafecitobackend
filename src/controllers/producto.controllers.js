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