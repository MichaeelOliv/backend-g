module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Meu Projeto Backend API',
    version: '1.0.0',
    description: 'Documentação Swagger da API do meu projeto backend.',
  },
  servers: [
    {
      url: 'http://localhost:4000/api',
      description: 'Servidor local',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
        },
      },
      NewUser: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
        },
        required: ['email', 'password'],
      },
      AuthRequest: {
        type: 'object',
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
        },
        required: ['email', 'password'],
      },
      AuthResponse: {
        type: 'object',
        properties: {
          token: { type: 'string' },
        },
      },
      Category: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
        },
      },
      NewCategory: {
        type: 'object',
        properties: {
          name: { type: 'string' },
        },
        required: ['name'],
      },
      Product: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
          description: { type: 'string' },
          price: { type: 'number', format: 'float' },
          stock: { type: 'integer' },
        },
      },
      NewProduct: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          price: { type: 'number', format: 'float' },
          stock: { type: 'integer' },
        },
        required: ['name', 'price', 'stock'],
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          error: { type: 'string' },
        },
      },
    },
  },
  paths: {
    '/users/register': {
      post: {
        summary: 'Registrar usuário',
        tags: ['Usuários'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/NewUser' },
            },
          },
        },
        responses: {
          '201': { description: 'Usuário criado com sucesso' },
          '400': {
            description: 'Dados inválidos',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
        },
      },
    },
    '/users/login': {
      post: {
        summary: 'Login de usuário',
        tags: ['Usuários'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/AuthRequest' },
            },
          },
        },
        responses: {
          '200': {
            description: 'Token JWT retornado',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/AuthResponse' } } },
          },
          '401': {
            description: 'Credenciais inválidas',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
        },
      },
    },
    '/users/{id}': {
      get: {
        summary: 'Obter usuário por ID',
        tags: ['Usuários'],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        responses: {
          '200': { description: 'Usuário retornado', content: { 'application/json': { schema: { $ref: '#/components/schemas/User' } } } },
          '404': { description: 'Usuário não encontrado' },
        },
      },
      put: {
        summary: 'Atualizar usuário',
        tags: ['Usuários'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/NewUser' } } },
        },
        responses: {
          '200': { description: 'Usuário atualizado' },
          '400': { description: 'Dados inválidos' },
          '404': { description: 'Usuário não encontrado' },
        },
      },
      delete: {
        summary: 'Deletar usuário',
        tags: ['Usuários'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        responses: {
          '204': { description: 'Usuário excluído com sucesso' },
          '404': { description: 'Usuário não encontrado' },
        },
      },
    },
    '/categories': {
      get: {
        summary: 'Listar categorias',
        tags: ['Categorias'],
        responses: {
          '200': { description: 'Lista de categorias retornada' },
        },
      },
      post: {
        summary: 'Criar categoria',
        tags: ['Categorias'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/NewCategory' } } },
        },
        responses: {
          '201': { description: 'Categoria criada' },
          '400': { description: 'Dados inválidos' },
        },
      },
    },
    '/categories/{id}': {
      get: {
        summary: 'Obter categoria por ID',
        tags: ['Categorias'],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        responses: {
          '200': { description: 'Categoria retornada' },
          '404': { description: 'Categoria não encontrada' },
        },
      },
      put: {
        summary: 'Atualizar categoria',
        tags: ['Categorias'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/NewCategory' } } },
        },
        responses: {
          '200': { description: 'Categoria atualizada' },
          '400': { description: 'Dados inválidos' },
          '404': { description: 'Categoria não encontrada' },
        },
      },
      delete: {
        summary: 'Deletar categoria',
        tags: ['Categorias'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        responses: {
          '204': { description: 'Categoria excluída' },
          '404': { description: 'Categoria não encontrada' },
        },
      },
    },
    '/products': {
      get: {
        summary: 'Listar produtos',
        tags: ['Produtos'],
        responses: {
          '200': { description: 'Lista de produtos retornada' },
        },
      },
      post: {
        summary: 'Criar produto',
        tags: ['Produtos'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/NewProduct' } } },
        },
        responses: {
          '201': { description: 'Produto criado' },
          '400': { description: 'Dados inválidos' },
        },
      },
    },
    '/products/{id}': {
      get: {
        summary: 'Obter produto por ID',
        tags: ['Produtos'],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        responses: {
          '200': { description: 'Produto retornado' },
          '404': { description: 'Produto não encontrado' },
        },
      },
      put: {
        summary: 'Atualizar produto',
        tags: ['Produtos'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/NewProduct' } } },
        },
        responses: {
          '200': { description: 'Produto atualizado' },
          '400': { description: 'Dados inválidos' },
          '404': { description: 'Produto não encontrado' },
        },
      },
      delete: {
        summary: 'Deletar produto',
        tags: ['Produtos'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        responses: {
          '204': { description: 'Produto excluído' },
          '404': { description: 'Produto não encontrado' },
        },
      },
    },
  },
};
