class Coche {

    constructor (carro){
        this.carro = carro;
    }

    #encenderMotor(){
        console.log(`encendemos el motor del ${this.carro} y luego se apaga.`);
    }

    conducir(){
        this.#encenderMotor();
        console.log(`el ${this.carro} esta en movimiento.`)
    }
}

const carro1 = new Coche ("pochito");
carro1.conducir();