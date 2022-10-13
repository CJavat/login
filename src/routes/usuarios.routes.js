const express = require('express');
const router = express.Router();
const { getUsers, putRegisterUsers, postUsers } = require('../controlles/usuarios.controller');

//! LOGIN.
//* GET
router.get('/users', getUsers);

//* POST (PASSWORD DECODIFICADO)
router.post('/users', postUsers);

//! REGISTER.
//* PUT
router.post('/registro-usuarios', putRegisterUsers);

module.exports.router = router;