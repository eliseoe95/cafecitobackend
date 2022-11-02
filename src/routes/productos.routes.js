import { Router } from 'express';
import { crearProductos, listarProductos, obtenerProductos, editarProducto, borrarProducto } from '../controllers/producto.controllers';
import { check } from 'express-validator';
const router = Router();

router.route('/productos').get(listarProductos).post([
    check('nombreProducto')
    .notEmpty()
    .withMessage('El nombre del producto es un dato obligatorio')
    .isLength({min: 2, max:100})
    .withMessage('El npmbre del porducto debe tener entre 2 y 100 caracteres')
    ,
    check('precio')
    .notEmpty()
    .withMessage('El precio del producto es un dato obligatorio')
    .isNumeric()
    .withMessage('El precio debe ser un valor numerico')
    .custom((value)=>{
        if(value>=1 && value<=10000){
            return true
        }else{
            throw new Error('El precio debe estar entre 1 y 10000')
        }
    })
    ,
    check('imagen')
    .notEmpty()
    .withMessage('La URL de la imagen es obligatoria')
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage('Debe ingresar una URL valida')
    ,
    check('categoria')
    .notEmpty()
    .withMessage('La categoria es obligatoria')
    .isIn(['Bebida Caliente', 'Bebida Fria', 'Dulce', 'Salado'])
    .withMessage('Debe ingresar una categoria valida')
],crearProductos);


router.route('/productos/:id').get(obtenerProductos).put(editarProducto).delete(borrarProducto)
// app.get('/prueba', (req, res)=>{
//     res.send('esto es una prueba de una peticion get')
// })
// app.delete('/prueba', (req, res)=>{
//     res.send('aqui tendria que borrar un dato')
// })
export default router;

//matches, maximo de caractere