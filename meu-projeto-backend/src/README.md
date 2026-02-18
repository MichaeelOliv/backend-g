# Meu Projeto Backend

Este é o backend da aplicação, desenvolvido em Node.js utilizando Express e Sequelize para gerenciamento de banco de dados. A API fornece autenticação via JWT e estrutura para rotas da aplicação.

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express** (Framework Web)
- **Sequelize** (ORM para Banco de Dados)
- **MySQL** (Banco de Dados Principal)
- **JWT (JSON Web Token)** (Autenticação)
- **Bcryptjs** (Hashing de senhas)
- **Jest & Supertest** (Testes Automatizados)

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v14 ou superior recomendado)
- [MySQL](https://www.mysql.com/)

## 🚀 Instalação e Configuração

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Configuração do Banco de Dados e Variáveis de Ambiente:**

   O projeto utiliza um arquivo `.env` na raiz para gerenciar configurações sensíveis. Você pode criar este arquivo manualmente ou basear-se no script `fix_env.js` incluído no projeto.

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo (ajuste conforme suas credenciais do MySQL):

   ```env
   PORT=4000
   DB_USERNAME=root
   DB_PASSWORD=sua_senha_aqui
   DB_DATABASE=meu_projeto_backend
   DB_HOST=localhost
   JWT_SECRET=sua_chave_secreta_segura
   ```

   > **Nota:** Certifique-se de criar o banco de dados `meu_projeto_backend` no seu MySQL antes de rodar a aplicação, ou deixe o Sequelize criá-lo se configurado para tal.

## ▶️ Como Rodar

### Ambiente de Desenvolvimento

Para rodar o servidor com `nodemon` (reinicia automaticamente ao salvar arquivos):

```bash
npm run dev
```

O servidor iniciará (por padrão) em: `http://localhost:4000`

### Ambiente de Produção

Para rodar o servidor de forma padrão:

```bash
npm start
```

### Rodando Testes

O projeto está configurado com Jest. Para executar os testes:

```bash
npm test
```

## 📂 Estrutura de Pastas

- `src/server.js`: Ponto de entrada da aplicação.
- `src/app.js`: Configuração do Express e Middlewares.
- `src/routes`: Definição das rotas da API.
- `src/models`: Modelos do Sequelize.
