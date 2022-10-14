const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express();
const httpServer = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(httpServer);
const usuariosRoutes = require('./routes/usuarios.routes').router;
const { eventoPrueba } = require('./controlles/usuarios.controller');


let userError = false, passwordError = false, inicioSesion = false, user = '';
eventoPrueba.on('datos', (mensaje, userReceived) => {
    //! user: CJAVAT 
    //! password: 123Javato
    
    if(mensaje === 'USUARIO INCORRECTO') {
        userError = true;
    }
    else if(mensaje === 'CONTRASEÑA INCORRECTO') {
        passwordError = true;
    }
    else if(mensaje === 'INICIANDO SESIÓN') {
        inicioSesion = true;
        user = userReceived;
    }
});
module.exports.user = user;

io.on('connection', (socket) => {
    console.log("Conexión establecida... " + socket.id);
    if(userError == true) {
        io.emit('Server: USER ERROR');
        userError = false;
    }
    else if(passwordError == true) {
        io.emit('Server: PASSWORD ERROR');
        passwordError = false;
    }
    else if(inicioSesion = true) {
        io.emit('Server: Inicio Sesion', user);
        inicioSesion = false;
    }
});

//* AGREGAR PÁGINA ESTÁTICA.
app.use(express.static('public'));
app.use('/registrar-usuarios', express.static('registrar-usuarios'));
app.use('/inicio', express.static('inicio'));

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

httpServer.listen(5000, () => {
    console.log("CORRIENDO EN EL PUERTO 5000...");
});