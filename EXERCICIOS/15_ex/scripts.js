
let num = 41;
let divisoes = 0;


for(let i = 1; i <= num; i++){
    // 4 - 1, 2, 4
    if(num % i == 0){
        divisoes++;
    }
    
}


if(divisoes == 2){
    console.log(`O numero ${num} é primo`);
}else {
    console.log(`O numero ${num} não é primo`);
}


