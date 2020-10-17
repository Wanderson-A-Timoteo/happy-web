import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

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


routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/id:', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);


export default routes;