function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function promEstudiantes(n) {
    for (let i = 1; i <= n; i++) {
        let nota1 = parseFloat(prompt(`Ingrese la nota 1 del estudiante ${i}:`));
        let nota2 = parseFloat(prompt(`Ingrese la nota 2 del estudiante ${i}:`));
        let nota3 = parseFloat(prompt(`Ingrese la nota 3 del estudiante ${i}:`));

        let promedio = calcularPromedio(nota1, nota2, nota3);

        if (promedio >= 3.0) {
            alert(`¡Aprobó!`);
        } else {
            alert(`No aprobó.`);
        }
    }
}

promedioEstudiantes(2);