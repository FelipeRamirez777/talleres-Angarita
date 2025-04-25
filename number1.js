class persona{
    constructor(nombre){
        this.nombre = nombre;
    }
    caminar(){
        return `Un dia salio a caminar ${this.nombre}.`;
    }
}

const nombre1 = new persona ("Felipe");
console.log (nombre1.caminar());