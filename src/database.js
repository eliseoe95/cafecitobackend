import mongoose from "mongoose";

//const url = 'mongodb://127.0.0.1:27017/cafecito-c8i'
const url ='mongodb+srv://eliseoe95:38249520@cluster0.pqd832q.mongodb.net/cafecito-ee';
mongoose.connect(url);

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('BD conectada');
})