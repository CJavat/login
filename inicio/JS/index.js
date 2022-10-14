const socket = io();

socket.on('Server: Inicio Sesion', user => {
    alert(`BIENVENIDO ${user}`);
});