function numeroMayor1 (numero1, numero2){
    return (numero1 > numero2 ? numero1 : numero2)
}

let numeros1 = numeroMayor1 (5,9);
console.log(numeros1);

function numeroMayor2 (numero1, numero2){
    if (numero1 > numero2){
    return numero1}
    else {return numero2}
}

let numeros2 = numeroMayor2 (10,5);
console.log(numeros2);
