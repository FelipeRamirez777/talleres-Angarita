function obtenerMayor (numero1,numero2){
    if (numero1 > numero2) {
        return numero1;
    } else {return numero2}
}

let prueba = obtenerMayor(5,7);
console.log(prueba)

function obtenerMayor (numero1, numero2){
    return (numero1 > numero2 ? numero1 : numero2);
}

let prueba2 = obtenerMayor (1,572268);
console.log(prueba2)