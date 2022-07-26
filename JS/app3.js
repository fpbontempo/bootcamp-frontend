let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

console.log("1. Adicione um novo produto ao array com as mesmas propriedades dos produtos existentes");
products.push( { name: 'Nintendo 64', price: 500, quantity: 3, colors: ['black', 'silver'] });
products.forEach(element => {
    //console.dir(element);
    console.log(JSON.stringify(element));
});

console.log("2. Remova os produtos fora de estoque da matriz.");
let produtosSemEstoque = products.filter(element => element.quantity > 0);
produtosSemEstoque.forEach(element => {
    console.log(JSON.stringify(element));
});

console.log("3. Imprima no console a soma do estoque de todos os produtos.");
let totalEstoque = products.reduce(function (total, produto) {
    return total + produto.quantity;
}, 0);
console.log(totalEstoque);

console.log("4. Imprima produtos com preço superior a um determinado valor. Maio que 100");
let produtosMaiorQue100 = products.filter(element => element.price > 100);
produtosMaiorQue100.forEach(element => {
    console.log(JSON.stringify(element));
});

console.log("5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.");
let produtosComALetra = products.filter(element => element.name.indexOf('o', 0) > 0);
produtosComALetra.forEach(element => {
    console.log(JSON.stringify(element));
});
