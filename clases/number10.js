class InstrumentoMusical {

    constructor(nombre){
        this.nombre = nombre;
    }

    tocar1(){
        return `${this.nombre} esta tocando la guitarra.`;
    }

    tocar2(){
        return `${this.nombre} ahora esta tocando la bateria.`;
    }

}

class guitarra extends InstrumentoMusical {

    constructor(nombre){
        super(nombre);
    }

}

class bateria extends InstrumentoMusical {

    constructor(nombre){
        super(nombre);
    }

}

const persona1 = new guitarra ("felipe");
const persona2 = new bateria ("felipe");
console.log(persona1.tocar1());
console.log(persona2.tocar2());
