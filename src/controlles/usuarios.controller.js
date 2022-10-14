const { pool } = require('../connection/connection');
const events = require('events').EventEmitter;
const eventoPrueba = new events();

const getUsers = async (req, res) => {
    const [ rows ] = await pool.query('SELECT * FROM user_registration');
    res.json(rows);
};

const postUsers = async (req, res) => {
    let banderaErrorUser = false, banderaErrorPassword = false;
    const { form_user, form_password } = req.body;
    const [ rows ] = await pool.query(`
    SELECT user_nickname, cast(aes_decrypt(user_password, 'llave') as char) AS 'password' from user_registration
    `);
    for(let row of rows) {
        if(row.user_nickname == form_user && row.password == form_password) {
            banderaErrorUser = false;
            banderaErrorPassword = false;
            eventoPrueba.emit('datos', 'INICIANDO SESIÓN', form_user);
            
            res.redirect('/inicio');
            break;
        }
        else if(row.user_nickname == form_user) {
            if(row.password != form_password) {
                banderaErrorPassword = true;
                break;
            }
        }
        else {
            banderaErrorUser = true;
        }
    }
    if(banderaErrorUser === true && banderaErrorPassword === false) {
        eventoPrueba.emit('datos', 'USUARIO INCORRECTO');
        res.redirect('/');
    }
    else if(banderaErrorPassword === true) {
        eventoPrueba.emit('datos', 'CONTRASEÑA INCORRECTO');
        res.redirect('/');
    }
};

const putRegisterUsers = async (req, res) => {
    const { form_name, form_lastname, form_user, form_password } = req.body;
    
    const [ rows ] = await pool.query(`INSERT INTO user_registration(user_name, user_lastname, user_nickname, user_password) 
    VALUES('${form_name}', '${form_lastname}', '${form_user}', aes_encrypt('${form_password}', 'llave'))`);

    res.status(200).send({
        id: rows.insertId,
        form_name,
        form_lastname,
        form_user,
        form_password
    }, res.redirect('/'));
};

module.exports.getUsers = getUsers;
module.exports.postUsers = postUsers;
module.exports.putRegisterUsers = putRegisterUsers;
module.exports.eventoPrueba = eventoPrueba;