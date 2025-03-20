function letra (cadena) {

    return cadena.includes(`s`) || cadena.includes(`S`);

}

let contiene = letra ("sanahoria");
console.log (contiene);
