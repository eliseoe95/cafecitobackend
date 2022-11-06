import { Router } from "express"
import { check } from "express-validator";
import { crearUsuario, listarUsuarios } from "../controllers/usuario.controllers";


const router = Router();

router.route('/usuarios').get(listarUsuarios).post([
    check('nombre')
    .notEmpty()
    .withMessage('El nombre es un dato obligatorio')
    .isLength({
        min:2,
        max:20})
    .withMessage('El nombre del usuario puede tener entre 2 y 20 caracteres')
    ,
    check('apellido')
    .notEmpty()
    .withMessage('El apellido del usuario es un dato obligatorio')
    .isLength({
        min:2,
        max:20})
    .withMessage('El apellido del usuario puede tener entre 2 y 20 caracteres')
    ,
    check('email')
    .notEmpty()
    .withMessage('El email es un dato obligatorio')
    .isEmail()
    .withMessage('El email ingresado no es correcto')
    .matches( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
    .withMessage('El email ingresado debe ser valido')
    ,
    check('contrasenia')
    .notEmpty()
    .withMessage('La contraseña es un campo obligatorio')
    .isLength({
        min:6})
    .withMessage('La contraseña debe tener al menos 6 caracteres')
],crearUsuario)

export default router;