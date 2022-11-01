import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

//crear una instancia de express
const app = express();
//confirgurar un puerto
app.set('port', process.env.PORT ||'4000')

app.listen( app.get('port'), ()=>{
    console.log('Estoy en el puerto ' +app.get('port'));
})

//midelwares: funciones que se ejecutan antes de las rutas
app.use(cors()); //permite conexiones remotas
//permiten interpretar el formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
//cargar un archivo estatico
app.use(express.static(path.join(__dirname,'../public')))

//rutas
//http://localhost:4000/prueba
app.get('/prueba', (req, res)=>{
    res.send('esto es una prueba de una peticion get')
})
app.delete('/prueba', (req, res)=>{
    res.send('aqui tendria que borrar un dato')
})