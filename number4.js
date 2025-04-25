class Animal{
   
     constructor(sonido1,sonido2){
        this.sonido1 = sonido1;
        this.sonido2 = sonido2;
     }

    hacerSonido(){
        return `tengo un perro y un gato`;
    }

}


class perro extends Animal{
    constructor(sonido1){
        super(sonido1);
    }

        hacerSonido(){
            return `mi perro hace ${this.sonido1}`;
        }
    
    
}

class gato extends Animal{
    constructor(sonido1,sonido2){
        super (sonido1,sonido2);
    }
        hacerSonido(){
        return `mi gato hace ${this.sonido2}`;
    }

}

const animales = new Animal ("perro","gato");
const miPerro = new perro("guau");
const miGato = new gato("","miau");
console.log(animales.hacerSonido());
console.log(miPerro.hacerSonido());
console.log(miGato.hacerSonido());

