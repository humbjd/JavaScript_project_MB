/* Escopo de uma funcao

O que acontece dentro de uma função, fica separado do escopo global

O escopo global seria todo o arquivo de javaScript

*/

let y = 10;

function imprimir(){
    let y = 150;
    console.log(y)
}
imprimir(); // chama a funcao onde o y esta declarado como 150
console.log(y); // imprime a variavel y no escopo global que vale 10

/*
Mais sobre escopo

Atualemente com le e const, qualquer bloco de codigo pode separar seu escopo (um if por exemplo)
Isso é muito bom pois separa os contextos, com var, isso nao acontecia
Ou seja, podemos ter escopos diferentes não só com funções
*/

let x = 10;

if(x > 5){
    let x = 20;
    x++;
    console.log(x);
}

console.log(x);
