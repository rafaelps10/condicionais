const jogada1 = 'papel';
const jogada2 = 'pedra';

if (jogada1 === jogada2) {
    console.log('empate');
} else {
    if (jogada1 === 'pedra') {
        if (jogada2 === 'tesoura') {
            console.log('pedra ganhou');
        } else {
            console.log('papel ganhou');
        }
    } else if (jogada1 === 'tesoura') {
        if (jogada2 === 'pedra') {
            console.log('pedra ganhou');
        } else {
            console.log('tesoura ganhou');
        }
    } else {
        jogada2 === 'pedra' ? console.log('papel ganhou') : console.log('tesoura ganhou');
    }
}