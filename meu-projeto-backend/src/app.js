const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const app = express();
const PORT = 4000;

// Rota principal com link para o README
app.get('/', (req, res) => {
    res.send(`
        <h1>API do Meu Projeto Backend está rodando!</h1>
        <p>
            Leia meu 
            <a href="/readme" target="_blank">readme</a>.
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
