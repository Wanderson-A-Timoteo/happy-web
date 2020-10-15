import express from 'express';

import './database/connection';


const app = express();

app.use(express.json());

// Rotas: /users
// Recursos: Usuarios

// Metodos HTTP: GET, PUT, POST E DELETE
// GET: Buscar uma informação (Listar itens)
// POST: Criando uma informação
// PUT: Editando ou Alterando uma informação
// DELETE: Deletando, Removendo ou excluindo uma informação

// PARAMENTOS
// Query Params: http://localhost:3333/users?search=wanderson (Lista todos os usuarios com nome wanderson)
// Route Params: http://localhost:3333/users/1 (identificar um recurso com id=1)
// Body: http://localhost:3333/users/1 (identificar um recurso com id=1)


app.get('/users', (request, response) => {
    return response.json({message: 'Hello World'});
});

// Definindo porta localhost:3333
app.listen(3333);

