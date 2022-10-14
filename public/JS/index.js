const socket = io();
const inputUser = document.getElementById('form-user');
const inputPassword = document.getElementById('form-password');
const checkSwitch = document.getElementById('check-switch');
const btnEnviarDatos = document.getElementById('enviar-datos');

let switchActivado = false;

checkSwitch.addEventListener("change", () => {
    if(switchActivado === false) {
        switchActivado = true; // CHECK SWITCH ACTIVADO.
        console.log("Switch Activado.");
        inputPassword.setAttribute('type', 'text');
    }
    else if(switchActivado === true) {
        switchActivado = false; // CHECK SWITCH DESACTIVADO.
        console.log("Switch Desactivado.");
        inputPassword.setAttribute('type', 'password');
    }
});

socket.on('Server: USER ERROR', () => {
    alert("Error usuario");
});

socket.on('Server: PASSWORD ERROR', () => {
    alert("Error password");
});