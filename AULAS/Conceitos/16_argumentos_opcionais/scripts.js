/*Argumentos opcionais
Podemos chamar uma funcao em JS sem o numero igual de parametros determinados
*/

function soma(a,b){

    if(a === undefined || b === undefined){
    console.log("Esta funcao precisa ter dois argumentos");
}else{
    return a + b;
    }
}
console.log(soma(1));
console.log(soma(1,2));

function saudacao(nome, idade){
    if (idade === undefined){
        console.log("Olá " + nome)
    }else{
        console.log('Olá ' + nome + ' voce tem ' + idade + ' anos')
    }
} 
saudacao('Humberto');
saudacao('Welton', 30);
