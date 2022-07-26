function calcularPreco(nomeProduto, valorProduto) {
    let custoEnvio = 0;
    if (valorProduto > 0 && valorProduto <= 2000) {
        custoEnvio = 200;
    } else if(valorProduto > 2001 && valorProduto <= 4000) {
        custoEnvio = 450;
    } else {
        custoEnvio = 700;
    }

    let valorFinal = valorProduto + custoEnvio;

    console.log("O produto " + nomeProduto + " custa " + valorProduto + " Seu custo de envio é " +
    custoEnvio + ". Portanto, o preço final é " + valorFinal);
}

calcularPreco ("Macbook", 2500);
calcularPreco ("Celular", 500);
calcularPreco ("Playstation", 4500);
