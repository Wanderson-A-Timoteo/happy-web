import express, { request, response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json({message: 'Hello World'});
});

// Definindo porta localhost:3333
app.listen(3333);

