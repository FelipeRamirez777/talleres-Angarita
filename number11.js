class Vehiculo{

    #modelo;

    constructor(modelo, marca){
        this.#modelo = modelo;
        this.marca = marca;
    }

    #encenderMotor(){
        console.log(`un vehiculo modelo ${this.#modelo} de marca ${this.marca} enciende su motor.`);
    }
    
    arrancar(){
        this.#encenderMotor();
    }
}

const carro1 = new Vehiculo("deportivo","toyota");
carro1.arrancar();