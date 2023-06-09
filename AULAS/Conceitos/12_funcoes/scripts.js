/*
O que sao funcoes?

Funcoes sao estruturas de codigos menores que sao reaproveitadas
durante a execucao/construcao de um programa

Principal objetivo: poupar repeticao de codigo
Podem ser consideradas 'subprogramas'
*/

/*
Definindo um funcao

Uma funcao tem uma estrutura um pouco mais complexa
Devemos declarar a funcao sempre com a palavra function
Uma funcao deve ter um nome
Pode conter argumentos/paramentros, definidos entre ()
O corpo da funcao é definido entre {}
Geralmente uma funcao retorna um valor
E possivel declarar funcoes em variaveis
*/

function escreverNoConsole(){
    console.log("Escrevendo no console!")
}
escreverNoConsole();

const textoNoConsole = function(){
    console.log("Texto no console!");
}
textoNoConsole();

const textPorParamentro = function(texto){
    console.log(texto);
}
textPorParamentro("Testando por parametro!");


// Aula

function imprirNoConsole (){
    console.log("Olá mundo!")
}
imprirNoConsole();

function imprirUmNumero(num){
    console.log("O numero é: " + num);
}
imprirUmNumero(2);
imprirUmNumero(4);
imprirUmNumero(15);
imprirUmNumero(35);
imprirUmNumero(78);

const numeroAleatorio = function(){
    console.log(Math.random());
}
numeroAleatorio();
numeroAleatorio();

// Aula 2 funcoes outros metodos

const soma = function(a, b){
    return a + b;
}
console.log(soma(3, 5));

const saudacao = function(nome){
    if(nome == "Humberto"){
        return "Olá Humberto!";
    }
}
console.log(saudacao("Humberto"));

// Mais funcoes

function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}
console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);
console.log("O valor de mult é " + mult);

function podeDirigir(idade,cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    }else {
        console.log("Não pode dirigir");
    }
}
console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17, false));













