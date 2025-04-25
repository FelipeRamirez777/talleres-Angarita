class Escuela{

    static numEstudiantes = 0;

    constructor(estudiante){
        this.estudiante = estudiante;
    }

    nuevoEstudiante(){
        Escuela.numEstudiantes++
        return `nuevo estudiante ${this.estudiante}`;
    }
}

const estudiante1 = new Escuela("felipe");
const estudiante2 = new Escuela("jaime");
const estudiante3 = new Escuela("andres");
console.log(estudiante1.nuevoEstudiante());
console.log(estudiante2.nuevoEstudiante());
console.log(estudiante3.nuevoEstudiante());