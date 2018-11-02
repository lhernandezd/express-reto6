const express = require('express');
const app = express();

//Settings
app.set('view engine','pug');
app.set('views','views');

//Middlewares
app.use(express.urlencoded()); //Para leer el cuerpo de las peticiones hechas por los formularios.

//Rutas
app.get('/', (req,res) => {
  res.render('form');
});

app.post('/', (req,res) => {
  res.send(`<h1>Hola ${req.body.nombre}!</h1>`);
});
/*
app.post('/hello', (req,res) => {
  res.render('hello', {name: `Hola ${req.body.nombre}!`});
});
*/
//Puerto
app.listen(3000, () => {
  console.log('Listening on port 3000!')
})