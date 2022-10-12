create database if not exists practicalogin;

use practicalogin;

create table user_registration (
	user_id int auto_increment,
    user_name varchar(50),
    user_lastname varchar(50),
    user_nickname varchar(10),
    user_password blob,
    
    primary key (user_id)
);

drop table user_registration;

-- CRUD / CREATE / READ / UPDATE / DELETE --

-- CREATE
INSERT INTO user_registration(user_name, user_lastname, user_nickname, user_password) 
		VALUES('Daniel', 'Plascencia', 'CJAVAT', '123Javato');
-- READ
SELECT * FROM user_registration;
-- UPDATE
UPDATE user_registration 
	SET user_name='Nuevo valor', user_lastname='Nuevo valor', user_nickname='nuevo valor', user_password='nuevo valor' 
    WHERE user_id = 1;
-- DELETE
DELETE FROM user_registration WHERE user_id=1;

-- NUEVA FORMA DE INSERTAR Y MOSTRAR DATOS ENCRIPTADOS.
INSERT INTO user_registration(user_name, user_lastname, user_nickname, user_password) 
		VALUES('Daniel', 'Plascencia', 'CJAVAT', aes_encrypt('123Javato', 'llave'));
select user_name, user_lastname, user_nickname, cast(aes_decrypt(user_password, 'llave') as char) AS 'password' from user_registration;


