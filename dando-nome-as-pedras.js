const ladoA = 4;
const ladoB = 4;

if (ladoA === ladoB) {
    //console.log('Sim');
    if (ladoA === 0) {
        console.log('bucha de Branco')
    } else if (ladoA === 1) {
        console.log('bucha de Ás')
    } else if (ladoA === 2) {
        console.log('bucha de Duque')
    } else if (ladoA === 3) {
        console.log('bucha de Terno')
    } else if (ladoA === 4) {
        console.log('bucha de Quadra')
    } else if (ladoA === 5) {
        console.log('bucha de Quina')
    } else {
        console.log('bucha de Sena')
    }
} else {
    console.log('Não');
}