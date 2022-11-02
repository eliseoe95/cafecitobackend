import { Router } from 'express';
import { crearProductos, listarProductos, obtenerProductos, editarProducto } from '../controllers/producto.controllers';

const router = Router();

router.route('/productos').get(listarProductos).post(crearProductos);
router.route('/productos/:id').get(obtenerProductos).put(editarProducto)
// app.get('/prueba', (req, res)=>{
//     res.send('esto es una prueba de una peticion get')
// })
// app.delete('/prueba', (req, res)=>{
//     res.send('aqui tendria que borrar un dato')
// })
export default router;