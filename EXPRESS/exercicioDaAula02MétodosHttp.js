const express = require('express');
let produtos = require('./products');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//retorna a lista de produtos
app.get('/produtos', (req, res) => {
    console.log(produtos.length);
    res.status(200).json(produtos);
});

//cadastra produtos
app.post('/produtos', (req, res) => {
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
app.put('/produtos/:id', (req, res) => {
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
app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;

    let produto = produtos.find(produto => produto.id == id);
    console.log(produto);
    if (!produto) {
        return res.status(400).json({ "message": "Produto não encontrado" })
    }

    produtos = produtos.filter(produto => produto.id != id);

    return res.status(200).json(produto);
});

app.listen(3000, () => console.log('Servidor em execução'));

/**
Crie um endpoint que use o método:
- POST para adicionar 4 produtos, de uma vez.
- PUT para modificar um desses produtos.
- DELETE para deletar um desses produtos.
- GET para verificar os que foram mantidos.
*/
