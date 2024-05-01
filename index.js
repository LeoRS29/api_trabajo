const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {config} = require('./config/config');

const port  = config.apiPort;
const routerApi = require('./rutas/')

//Convierte petición recibida

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'La ruta home, está trabajando correctamente!',
        author:'By Jazmin Rojas y Paul Macias Mares'
    });
});

app.get('/el_nuevo', function(req, res){
    res.status(200).send({
        message: 'Nosotros somos el equipo 4 y estamos trabajando en  git hub',
        Equipo:'Equipo 4',
        Integrantes:'Paul Macias Mares y Vanessa Jazmin Rojas Reyes'
    });
});
routerApi(app);

app.listen(port, function(){
    console.log(`Servidor corrigiendo en http://localhost:${port}`);
    console.log(`Servicio configurado inicial: `),
    console.log(`  [GET] https://localhost:${port}/`)
    console.log(`  [GET] https://localhost:${port}/el_nuevo`)
});
