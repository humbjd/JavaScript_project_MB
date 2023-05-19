/*Antes de mais nada: funcoes sao chamadas durante o programa;
Voce tambem pode ouvir: executar, chamar, invocar uma funcao;
E nos chamamos a funcao utilizando o nome dela + abrindo e fechando parenteses;
Tambem podemos inserir paramentros, em algumas funcoes sao obrigatorios;
Basicamente sao valores que podem mudar o resultado da funcao;
*/
//Exemplo:
//nomeDaFuncao();
//nomeDaFuncao(parametro1, parametro2);

/*FUNCAO BUILT IN :prompt()
Recebe um input do usuario do sistema e pode guardar esse valor 
Ex: let idade = prompt('Qual a sua idade?');
console.log(idade)
Essa funcao é pouco utilizada.
*/
let idade = prompt('Qual a sua idade?');
console.log(idade);

let nome = prompt('Qual o seu nome?');
alert(`O seu nome é ${nome} e voce tem ${idade} anos. Seja BEM VINDO!`)

/*FUNCAO BUILT IN: alert()
Ex: alert('Veja esta mensagem!')
Essa funcao é pouco utilizada e considerada invasiva
*/

