const quantidadeDeAguaIngerida = 5;

if (quantidadeDeAguaIngerida < 1.5) {
    console.log('Risco Alto - Você está ingerindo pouqíssima água, beba mais água!');
} else if (quantidadeDeAguaIngerida <= 3) {
    console.log('Risco Moderado - Você está ingerindo pouca água, beba mais!');
} else {
    console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!');
}