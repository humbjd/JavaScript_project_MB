let idade = 21;
let cnh = false;

if(idade >= 18 && cnh == false){
    console.log('Voce NAO pode dirigir, mas pode tirar a CNH')
}else if(idade >= 18 && cnh == true){
    console.log('Voce esta apto a dirigir')
}else{
    console.log('Voce não está apto a dirigir')
}

