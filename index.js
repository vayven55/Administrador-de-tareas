const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

// Crear una copia del sevidor en app
const app = express();

const path = require('path');

// HAbilitar pug
app.set('view engine', 'pug');

// Donde cargar los archivos estáticos
//app.set(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')))

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//Habilitar body-parser para leer datos
app.use(bodyParser.urlencoded({extended: true}));

// ruta para el home
app.use('/', routes());



app.listen(3000)