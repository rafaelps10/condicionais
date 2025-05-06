// 1ª forma de resolver o problema:
const nota = 4.5;

if (nota >= 9 && nota <= 10) {
    console.log('O estudando obteve conceito A');
} else if (nota >= 8 && nota < 9 ) {
    console.log('O estudando obteve conceito B');
} else if (nota >= 6 && nota < 8 ) {
    console.log('O estudando obteve conceito C');
} else if (nota >= 4 && nota < 6 ) {
    console.log('O estudando obteve conceito D');
} else {
    console.log('O estudando obteve conceito E');
}

// 2ª forma de resolver o problema:
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