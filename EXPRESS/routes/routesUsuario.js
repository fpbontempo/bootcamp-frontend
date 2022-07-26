const express = require('express');

const routes = express.Router();

let users = require('../users');

//retorna a lista de usuários
routes.get('/', (req, res) => {

    let usersNames = users.map(user => user.username + ' - ' + user.email);

    return res.status(200).json(usersNames);
});

//cadastra um novo usuario
routes.post('/', (req, res) => {
    const conteudo = req.body;
    const { username } = req.body[0];
    console.log(username);
    let userEncontrado = users.find((user) => user.username === username);
    console.log(userEncontrado);
    if (userEncontrado) {
      return res.status(400).json({ "message": "Usuário já existe" })
    }

    users = [...users, ...conteudo];
    return res.status(201).send("Usuário cadastrado com sucesso");
});

//deleta um usuario
routes.delete('/:name', (req, res) => {

    let usuarioEncontrado = users.find(user => user.username === req.params.name);

    if (!usuarioEncontrado) {
        return res.status(200).json({ "message": "Usuário não existe" });
    } else if (usuarioEncontrado.username === "admin") {
        return res.status(200).json({ "message": "Usuário não pode ser deletado" });
    }

    users = users.filter(user => user.username !== usuarioEncontrado.username);

    return res.status(200).send("Usuário deletado com sucesso");
});

//atualiza o somente o e-mail do usuario
routes.put('/:name', (req, res) => {
    const { email } = req.body[0];
    let usuarioEncontrado = users.find(user => user.username === req.params.name);

    if (!usuarioEncontrado) {
        return res.status(200).json({ "message": "Usuário não existe" });
    }

    usuarioEncontrado.email = email;
    users = users.map(user => user.username === usuarioEncontrado.username ? usuarioEncontrado : user);

    return res.status(200).send("Usuário atualizado com sucesso");
});

module.exports = routes;
