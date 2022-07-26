//exercicioAula03-middlewares

const express = require('express');

const app = express();

const rotaProdutos = require('./routes/routesProdutos');

const rotaUsuarios = require('./routes/routesUsuario');

app.use(express.json());

app.use('/api/produtos', rotaProdutos);

app.use('/api/users', rotaUsuarios);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () =>
    console.log('Servidor em execução'));
