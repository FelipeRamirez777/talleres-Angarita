class Empleado {

    #nombre;
    #salario;
    
    constructor (nombre,salario){
        this.#nombre = nombre;
        this.#salario = salario;
    }

    getTrabajar1(nombre){
        return this.#nombre;
    }

    setTrabajar1(nombre){
        if (nombre.length > 0){
            this.#nombre = nombre;
        } else {
            console.log("ingresa los caracteres que son");
        }

    }

    getTrabajar2(){
        return this.#salario;
    }

    setTrabajar2(salario){
        if (salario > 0){
            this.#salario = salario;
        } else {
            console.log("ingrese un valor valido");
        }
    }

}

const nombre1 = new Empleado ("felipe","10.000");
console.log(nombre1.getTrabajar1());

nombre1.setTrabajar1("");
nombre1.getTrabajar1();

console.log(nombre1.getTrabajar2());

nombre1.setTrabajar2("");
nombre1.getTrabajar2();