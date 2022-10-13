const express = require('express');
const router = express.Router();
const { getUsers, putRegisterUsers } = require('../controlles/usuarios.controller');

//* GET
router.get('/users', getUsers);

//* PUT
// router.post('/users', putRegisterUsers);

router.post('/registro-usuarios', putRegisterUsers);

module.exports.router = router;

/*
NUEVA FORMA DE INSERTAR Y MOSTRAR DATOS ENCRIPTADOS.
INSERT INTO user_registration(user_name, user_lastname, user_nickname, user_password) 
		VALUES('Daniel', 'Plascencia', 'CJAVAT', aes_encrypt('123Javato', 'llave'));
select user_name, user_lastname, user_nickname, cast(aes_decrypt(user_password, 'llave') as char) AS 'password' from user_registration;


*/