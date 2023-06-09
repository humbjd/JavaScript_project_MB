/* Arrow Functions
Uma outra forma de escrever funcoes
Bem utilizada nos frameworks modernos
Porem nao deve substituir as functions por completo
*/

let consoleTeste = () =>{
    console.log("Olá mundo!");
}

consoleTeste();

let soma = (a, b) => {
    return a + b;
}
console.log(soma(10,20))

/* Mais sobre Arrow functions
Se só tem um paramentro podemos remover os parenteses do argumento eo return
Se a expressao for pequena, pode até ser feita em um linha sem prejudicar a leitura do codigo
*/

const multiplicarPorDois = (x) => {
    return x * 2;
}
console.log(multiplicarPorDois(2));

const multiplicarPorDois2 = x => x * 2;
console.log(multiplicarPorDois2(4));



