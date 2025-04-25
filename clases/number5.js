class vehiculo{

    constructor(peso, velocidadMax){
        this.peso = peso;
        this.velocidadMax = velocidadMax;
    }
    mover1(){
        return `el carro tiene una velocidad maxima
        que es de ${this.velocidadMax}km y tiene un peso de ${this.peso}kg y es de marca ${this.marca}.`; 
    }
    mover2(){
        return `la bicicleta tiene una velocidad maxima
        que es de ${this.velocidadMax}km y tiene un peso de ${this.peso}kg y es de color ${this.color}.`; 
    }   
}

class carro extends vehiculo{
    constructor(peso, velocidadMax, marca){
        super(peso, velocidadMax);
        this.marca = marca;
    }

}

class bicicleta extends vehiculo{
    constructor(peso, velocidadMax, color){
        super(peso,velocidadMax);
        this.color = color;
    }
   
}

const elCarro = new carro ("2000", "200", "supra");
const laBicicleta = new bicicleta ("60", "50", "rojo");
console.log(elCarro.mover1());
console.log(laBicicleta.mover2());