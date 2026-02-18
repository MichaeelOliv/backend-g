const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

(async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\`;`);
        console.log(`Banco de dados '${process.env.DB_DATABASE}' verificado/criado com sucesso!`);
        await connection.end();
    } catch (error) {
        console.error('Erro ao criar o banco de dados:', error.message);
    }
})();