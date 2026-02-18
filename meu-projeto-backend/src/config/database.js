// src/config/database.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  // Adicione esta seção para o ambiente de teste
  test: {
    dialect: 'sqlite',
    storage: ':memory:', // Usa um banco de dados em memória
    logging: false       // Desabilita os logs do Sequelize no console de teste
  },
  production: {
    // Sua configuração de produção aqui...
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
  }
};
