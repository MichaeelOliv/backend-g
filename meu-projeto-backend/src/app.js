const express = require('express');
const routes = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const path = require('path');
const app = express();

app.use(express.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rota principal com link para o README e Swagger
app.get('/', (req, res) => {
    res.send(`
        <h1>API do Meu Projeto Backend está rodando!</h1>
        <p>
            Leia meu 
            <a href="/readme" target="_blank">readme</a>.
        </p>
        <p>
            A documentação da API está disponível em 
            <a href="/api-docs" target="_blank">/api-docs</a>.
        </p>
        <p>Aluno: Antonio Michaeel de Oliveira da Silva.</p>
        <p>Curso: Fullstack!</p>
    `);
});

// Rota para servir o README.md
app.get('/readme', (req, res) => {
    const readmePath = path.join(__dirname, 'README.md');
    res.sendFile(readmePath, (err) => {
        if (err) {
            res.status(500).send('Erro ao carregar o README.');
        }
    });
});

// Middleware para rotas não encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

module.exports = app;
