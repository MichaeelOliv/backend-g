const request = require('supertest');
const app = require('../src/app');
const { sequelize } = require('../src/models');

// Hooks para gerenciar o estado do banco de dados para os testes
beforeAll(async () => {
    // Recria as tabelas no banco de dados em memória antes de todos os testes
    await sequelize.sync({ force: true });
});

beforeEach(async () => {
    // Limpa a tabela de usuários antes de cada teste para garantir isolamento
    await sequelize.models.User.destroy({ truncate: true });
});

afterAll(async () => {
    // Fecha a conexão com o banco de dados após todos os testes
    await sequelize.close();
});

describe('User Endpoints', () => {
    test('deve criar um novo usuário com sucesso', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ name: 'Teste', email: 'teste@teste.com', password: '123456' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.email).toBe('teste@teste.com');
        expect(res.body).not.toHaveProperty('password'); // Garante que a senha não é retornada
    });

    test('não deve criar um usuário com um email que já existe', async () => {
        // Cria um usuário inicial
        await request(app).post('/api/users/register').send({ name: 'Teste', email: 'teste@teste.com', password: '123456' });
        // Tenta criar outro com o mesmo email
        const res = await request(app).post('/api/users/register').send({ name: 'Outro Teste', email: 'teste@teste.com', password: '654321' });
        expect(res.statusCode).toBe(400);
    });
});