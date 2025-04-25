class Universidad{

    static numEstudiantes = 0;

    static registrarEstudiante(){
        Universidad.numEstudiantes++;
    }
}

console.log(Universidad.numEstudiantes);
Universidad.registrarEstudiante();
Universidad.registrarEstudiante();  
Universidad.registrarEstudiante();
console.log(Universidad.numEstudiantes);