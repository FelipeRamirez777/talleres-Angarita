function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es cero.";
    }
}

console.log(determinarSigno(5));   
console.log(determinarSigno(-3));  
console.log(determinarSigno(0)); 