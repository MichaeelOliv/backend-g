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

   > **Nota:** O arquivo `meu-projeto-backend/server.env` não deve ser enviado ao repositório e está listado no `.gitignore` para proteger dados sensíveis.
   > Certifique-se de manter essas credenciais apenas localmente.

## 📘 Documentação da API

A documentação Swagger está disponível após iniciar a aplicação em:

- `http://localhost:4000/api-docs`

## ▶️ Como Rodar 

## Como verificar as tabelas corretamente 
- (passo a passo)Abra o Prompt de Comando (CMD) normalmente (não precisa ser admin).
Digite isso para entrar no MySQL:bash

mysql -u root -p

Vai pedir a senha → digite a senha do seu root e pressione Enter.
Se entrar com sucesso, o prompt muda para:

mysql>

Agora, dentro do prompt mysql>, execute esses comandos um por um (pressione Enter após cada linha):sql

USE ecommerce_db;

sql

SHOW TABLES;

Deve aparecer algo como:

+-------------------------+
| Tables_in_ecommerce_db  |
+-------------------------+
| Users                   |
+-------------------------+

(A tabela do User é criada como Users com "U" maiúsculo por padrão do Sequelize.)

Para sair do MySQL:sql

EXIT;

Se der erro ao entrar com mysql -u root -p"Access denied": senha errada → tente lembrar ou resetar a senha do root.
Comando não reconhecido: o MySQL não está no PATH → use o caminho completo, ex:bash

"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql" -u root -p

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

