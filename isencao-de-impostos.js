const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimento = 3000000;

if (aposentada || portadoraDeDoenca) {
    console.log('ISENTA');
} else if (totalDeRendimento < 2855970) {
    console.log('VAZA, LEÃO! JÁ TÁ DIFÍCIL SEM VOCÊ');
} else {
    console.log('PEGA, LEÃO!');
}