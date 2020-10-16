import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

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


app.post('/orphanages', async (request, response) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    });

    await orphanagesRepository.save(orphanage);
    
    return response.json({message: 'Hello World'});
});

// Definindo porta localhost:3333
app.listen(3333);

