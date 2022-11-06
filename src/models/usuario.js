import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
        nombre:{
            type: String,
            required: true,
            minLength:2,
            maxLength:20
        },
        apellido:{
            type: String,
            required: true,
            minLength:2,
            maxLength:20
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        contrasenia:{
            type: String,
            required: true,
            minLength: 6
        }
});

const Usuarios = mongoose.model('usuario', usuarioSchema);

export default Usuarios;