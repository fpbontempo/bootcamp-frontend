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

console.log("1. Adicione um ID exclusivo a cada produto começando em 1.");
let id = 1;
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    element.id = id++; //essa linha tb pode ser feita assim: products['id'] = index + 1
}
products.forEach(element => {
    console.log(JSON.stringify(element));
});

console.log("2. Imprima o nome de cada um dos produtos no console.");
products.forEach(element => {
    console.log("Nome: " + element.name);
});

console.log("3. Imprima no console o produto com o id 3.");
let produto3 = products.find(element => element.id == 3);
console.log("O id 3, é ref ao obj: " + JSON.stringify(produto3));

console.log("4. Imprima no console os produtos com a cor “black”.");
let produtosBlacks = products.filter(element => element.colors.includes('black'));
produtosBlacks.forEach(element => {
    console.log(JSON.stringify(element));;
});

console.log(" 5. Imprima no console os produtos que não possuem cor.");
let produtosSemCores = products.filter(element => element.colors.length == 0);
produtosSemCores.forEach(element => {
    console.log(JSON.stringify(element));
});

//push - adiciona item ao final do arry
//pop - apapga o ultimo elemento
//join - uni os elementos de um array usando um separar que foi especificado
//filter - retorna um novo array com os elemebto que passaram na condicao
//map - retorna um novo array com todos os elementos modificados
//forEach - ele faz um processo em um array, porem ele nao devolve nada, nao respeita promises

//bracket notation
