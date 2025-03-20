function sumarNumNaturales (n){

    let suma = 0;

    for (i = 1; i <= n; i++){
        suma += i;
    }

    return suma;
}

let resultado = sumarNumNaturales (10);
console.log(resultado);