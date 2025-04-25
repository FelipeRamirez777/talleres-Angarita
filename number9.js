class Empleado {
    
    trabajar(){
        return `el empleado esta trabajando`;
    }
}

class gerente extends Empleado {
    
    trabajar(){
        return `el gerente ya no esta trabajando`;
    }
}

const empleado1 = new Empleado();
const empleado2 = new gerente();
console.log(empleado1.trabajar());
console.log(empleado2.trabajar());

