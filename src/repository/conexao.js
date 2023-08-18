import mysql from 'mysql2/promise';

let dados = {
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PWD
}

const conexao = await mysql.createConnection(dados);
console.log('BD conectado');

export default conexao;