const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express();
const usuariosRoutes = require('./routes/usuarios.routes').router;

//* AGREGAR PÁGINA ESTÁTICA.
app.use(express.static('public'));
app.use('/registrar-usuarios', express.static('registrar-usuarios'));

//* AGREGAR FAVICON A TODAS LAS PÁGINAS.
app.use(favicon('public/IMG/favicon.ico'));

//* MIDDLEWARE - Para darle acceso al core de que pueda manipular MYSQL.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//* MIDDLEWARE - Sirve para parsear el body del POST y obtenerlo.
app.use(bodyParser.urlencoded({ extended: false }));

//* PARA CONVERTIR EN JSON TODOS LOS DATOS QUE RECIBA.
app.use(express.json());

//! END POINTS
//* PARA USAR LAS RUTAS.
app.use('/api', usuariosRoutes);

app.listen(5000, () => {
    console.log("CORRIENDO EN EL PUERTO 5000...");
});