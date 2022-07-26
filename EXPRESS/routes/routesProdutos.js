const express = require('express');

const routes = express.Router();

let produtos = require('../products'); //base de dados em JSON

//retorna a lista de produtos
routes.get('/', (req, res) => {
    res.status(200).json(produtos);
});

//retorna um produto por ID
routes.get('/:id', (req, res) => {
    const { id } = req.params;
    let produto = produtos.find((produtos) => produtos.id == id);

    if (!produto) {
      return res.status(400).json({ "message": "Produto não encontrado" })
    }

    return res.status(200).json(produto);
});

//cadastra produtos
routes.post('/', (req, res) => {
    const conteudo = req.body;

    const quantidadeProdutos = produtos.length + 1;

    for (let index = 0; index < conteudo.length; index++) {
        const element = conteudo[index];
        element.id = quantidadeProdutos + index;
    }

    produtos = [...produtos, ...conteudo];
    res.status(201).json(produtos);
});

//atualiza um produto
routes.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const { price } = req.body;
    const { quantity } = req.body;
    const { colors } = req.body;

    let produto = produtos.find((produtos) => produtos.id == id);

    if (!produto) {
      return res.status(400).json({ "message": "Produto não encontrado" })
    }

    produto.name = name;
    produto.price = price;
    produto.quantity = quantity;
    produto.colors = colors;
    console.log(produto.name);

    return res.status(200).json(produto);
});

//deleta um produto
routes.delete('/:id', (req, res) => {
    const { id } = req.params;

    let produto = produtos.find(produto => produto.id == id);
    console.log(produto);
    if (!produto) {
        return res.status(400).json({ "message": "Produto não encontrado" })
    }

    produtos = produtos.filter(produto => produto.id != id);

    return res.status(200).json(produto);
});

module.exports = routes;

/*
1. Retornar todos os produtos da array. “/api/products”,
2. Obter um produto específico pelo ID “/api/products/:id”
3. Adicionar um novo produto “/api/products”,
4. Mudar uma propriedade do produto (qualquer uma) “/api/products/:id”,
5. Deletar um produto utilizando o ID “/api/products/:id”.
*/
