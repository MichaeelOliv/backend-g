const path = require('path');
// Carrega server.env (PORT, JWT_SECRET) e depois .env (DB_USERNAME, DB_PASSWORD, etc)
require('dotenv').config({ path: path.resolve(__dirname, '../server.env') });
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
