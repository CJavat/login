const { pool } = require('../connection/connection');

const getUsers = async (req, res) => {
    const [ rows ] = await pool.query('SELECT * FROM user_registration');
    // const [ rows ] = await pool.query(`
    //     SELECT user_name, user_lastname, user_nickname, cast(aes_decrypt(user_password, 'llave') as char) AS 'password' from user_registration
    // `);
    res.json(rows);
};

const putUsers = async (req, res) => {

};

module.exports.getUsers = getUsers;
module.exports.putUsers = putUsers;