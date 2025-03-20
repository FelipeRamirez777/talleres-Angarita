function cantidadVocales(cadena) {

    let contador = 0;  
    let vocales = "aeiou"; 

    for (let letra of cadena) {  
        if (vocales.includes(letra)) {  
            contador++; 
        }
    }

    return contador;  

}

let resultado = cantidadVocales("andres felipe");
console.log(resultado); 