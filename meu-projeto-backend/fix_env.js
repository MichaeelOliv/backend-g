const fs = require('fs');
const path = require('path');

const content = `PORT=4000
DB_USERNAME=root
DB_PASSWORD=Amos@1992
DB_DATABASE=meu_projeto_backend
DB_HOST=localhost
JWT_SECRET=minha_chave_secreta_segura`;

fs.writeFileSync(path.join(__dirname, '.env'), content.trim());
console.log('Arquivo .env recriado com sucesso na raiz do projeto!');