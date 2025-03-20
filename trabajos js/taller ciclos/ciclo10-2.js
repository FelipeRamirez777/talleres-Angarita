function calcularPromedio() {
    let suma = 0;
    let numeros = [15, 28, 35, 40, 58, 68, 77, 80, 99, 100];

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]; 
    }

    let promedio = suma / numeros.length;
    console.log(`El promedio de los 10 números es: ${promedio}`);
}

calcularPromedio();

