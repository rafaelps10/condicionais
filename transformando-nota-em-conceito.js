const nota2 = 4.5;

let conceito = '';

if (nota2 < 4) {
    conceito = 'E';
} else if (nota2 < 6) {
    conceito = 'D';
} else if (nota2 < 8) {
    conceito = 'C';
} else if (nota2 < 9) {
    conceito = 'B';
} else {
    conceito = 'A'
}

console.log(`O estudando obteve conceito ${conceito}`);