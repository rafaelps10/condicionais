const rendaMensalEmCentavos = 100000;
const mesesDecorrido = 12;
const totalPagoPeloAluno = 1000000;

if (mesesDecorrido > 60) {
    console.log('Sua dívida está quitada!');
} else if (totalPagoPeloAluno >= 1800000) {
    console.log('Você quitou todas as parcelas');
} else if (rendaMensalEmCentavos < 200000) {
    console.log('o valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido, pois a renda está abaixo de valor mínimo de R$2000 reais');
} else {
    const valorParcela = (rendaMensalEmCentavos / 100) * 18 / 100;
    console.log(`O valor da parcela este mês é R$${valorParcela} reais`);
}
