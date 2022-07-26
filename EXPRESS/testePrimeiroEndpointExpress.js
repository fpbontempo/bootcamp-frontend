const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/produtos', (req, res) => {
    res.send('Rota de produtos');
});

//exemplo de uso do redirect
// app.get('/', (req, res) => {
//     if (1 > 2) {
//         res.send('Hello');
//     } else {
//         res.redirect('/produtos');
//     }
// });

app.listen(3000, () => console.log('Servidor em execução'));

//para rodar - npm run start, apos configurar o script no package
//mata porta npx kill port 3000
