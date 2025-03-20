function sinVocales(cadena) {
    let vocales = "aeiou"; 
    let nuevaCadena = ""; 

    for (let letra of cadena) {
        if (!vocales.includes(letra)) {
            nuevaCadena += letra; 
        }
    }

    return nuevaCadena;
}

let resultado = sinVocales("andres felipe");
console.log(resultado); 