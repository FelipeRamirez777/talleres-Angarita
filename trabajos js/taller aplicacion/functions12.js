function verificarAprobado(nota1, nota2, nota3, nota4, nota5) {
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    if (promedio >= 3.0) {
        return "¡El estudiante aprobó la materia!";
    } else {
        return "El estudiante no aprobó la materia.";
    }
}
let resultado = verificarAprobado(2.5, 3.0, 4.0, 3.5, 2.0);
console.log(resultado); 