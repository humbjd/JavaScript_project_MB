// Recursion

// Uma funcionalidade que permite uma funcao se chamar novamente
// Isso pode ser um problema caso a funcao se chame muitas vezes

function retornarNumeroPar(n){
    if(n % 2 == 0){
        console.log("n agora é par: " + n);
    }else{
        console.log(n);
        retornarNumeroPar(n - 1);
    }
}

retornarNumeroPar(33);


function recursao(n){
    if(n -1 ==2){
        console.log("Recursão parou");
    }else if(n % 2 != 0){
        console.log("Numero impar " + n);
        recursao(n - 1);
    }else{
        console.log("Numero par " + n);
        recursao(n - 2);
    }
}

recursao(39);
recursao(10);
recursao(55);
