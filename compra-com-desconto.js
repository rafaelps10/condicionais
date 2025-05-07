const tipoDePagamento = 'dinheiro';
const valorDoProdutoEmCentavos = 15000;

let valorComDesconto = 0;

if (tipoDePagamento === 'credito') {
    valorComDesconto = valorDoProdutoEmCentavos * 95 / 100;
} else if (tipoDePagamento === 'cheque') {
    valorComDesconto = valorDoProdutoEmCentavos * 97 / 100;
} else {
    valorComDesconto = valorDoProdutoEmCentavos * 90 / 100;
}

console.log(`Valor a ser pago R$${(valorComDesconto / 100).toFixed(2)}`);