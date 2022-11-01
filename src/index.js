import express from 'express';

//crear una instancia de express
const app = express();
//confirgurar un puerto
app.set('port', process.env.PORT ||'4000')

app.listen( app.get('port'), ()=>{
    console.log('Estpy en el puerto ' +app.get('port'))
})

console.log('Hola Mundo')
