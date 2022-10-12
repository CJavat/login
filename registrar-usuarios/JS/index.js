const inputName = document.getElementById('form-name');
const inputLastName = document.getElementById('form-lastname');
const inputUser = document.getElementById('form-user');
const inputPassword = document.getElementById('form-password');
const inputConfirmPassword = document.getElementById('form-confirm-password');
const checkSwitch = document.getElementById('check-switch');
const btnEnviarDatos = document.getElementById('enviar-datos');

let switchActivado = false;

checkSwitch.addEventListener("change", () => {
    if(switchActivado === false) {
        switchActivado = true; // CHECK SWITCH ACTIVADO.
        console.log("Switch Activado.");
        inputPassword.setAttribute('type', 'text');
        inputConfirmPassword.setAttribute('type', 'text');
    }
    else if(switchActivado === true) {
        switchActivado = false; // CHECK SWITCH DESACTIVADO.
        console.log("Switch Desactivado.");
        inputPassword.setAttribute('type', 'password');
        inputConfirmPassword.setAttribute('type', 'password');
    }
});