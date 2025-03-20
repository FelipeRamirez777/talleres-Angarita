function array (arrelo){
    return arrelo.filter(numeros => numeros % 2 === 0);
}

let numeros = [1,2,3,4,5,6,7,8,9,10];
let pares = array (numeros);
console.log(pares);
