const socket = io();
const inputName = document.getElementById('form-name');
const inputLastName = document.getElementById('form-lastname');
const inputUser = document.getElementById('form-user');
const inputPassword = document.getElementById('form-password');
const inputConfirmPassword = document.getElementById('form-confirm-password');
const checkSwitch = document.getElementById('check-switch');
const btnEnviarDatos = document.getElementById('enviar-datos');

let switchActivado = false;

inputPassword.addEventListener('keyup', (evt) => {
    if(inputPassword.value !== inputConfirmPassword.value) {
        console.log("Las contraseñas no coinciden, por favor revisalo.");
        inputPassword.classList.add('no-valido');
        inputPassword.classList.remove('valido');
        inputPassword.classList.remove('validacion');

        inputConfirmPassword.classList.add('no-valido');
        inputConfirmPassword.classList.remove('valido');
        inputConfirmPassword.classList.remove('validacion');
    }
    else {
        console.log("Las contraseñas coinciden.");
        inputPassword.classList.remove('no-valido');
        inputPassword.classList.add('valido');
        inputPassword.classList.add('validacion');

        inputConfirmPassword.classList.remove('no-valido');
        inputConfirmPassword.classList.add('valido');
        inputConfirmPassword.classList.add('validacion');
    }
});

inputConfirmPassword.addEventListener('keyup', (evt) => {
    if(inputPassword.value !== inputConfirmPassword.value) {
        console.log("Las contraseñas no coinciden, por favor revisalo.");
        inputPassword.classList.add('no-valido');
        inputPassword.classList.remove('valido');
        inputPassword.classList.remove('validacion');

        inputConfirmPassword.classList.add('no-valido');
        inputConfirmPassword.classList.remove('valido');
        inputConfirmPassword.classList.remove('validacion');
    }
    else {
        console.log("Las contraseñas coinciden.");
        inputPassword.classList.remove('no-valido');
        inputPassword.classList.add('valido');
        inputPassword.classList.add('validacion');

        inputConfirmPassword.classList.remove('no-valido');
        inputConfirmPassword.classList.add('valido');
        inputConfirmPassword.classList.add('validacion');
    }
});

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