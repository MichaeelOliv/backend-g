const path = require('path');
// Garante que o .env seja lido da raiz do projeto
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
