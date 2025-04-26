class Inventario {

    constructor() {
        this.videojuegos = [];
        this.idActual = 1;
    }

    ingresarVideojuego(videojuego) {
        videojuego.id = this.idActual++;
        this.videojuegos.push(videojuego);
    }

    obtenerTodosVideojuegos() {
        return this.videojuegos;
    }

    actualizarVideojuego(id, datosActualizados) {
        const index = this.videojuegos.findIndex(play => play.id === id);
        if (index !== -1) {
            this.videojuegos[index] = { ...this.videojuegos[index], ...datosActualizados };
        }
    }

    eliminarVideojuego(id) {
        this.videojuegos = this.videojuegos.filter(play => play.id !== id);
    }
    
    obtenerVidioGame(id) {
        return this.videojuegos.find(play => play.id === id);
    }
    
}

const juegos = new Inventario();
juegos.ingresarVideojuego({ nombre: "Minecraft", precio: 100000, categoria: "Sandbox" });
juegos.ingresarVideojuego({ nombre: "league of legends", precio: 150000, categoria: "MOBA"});

console.log(juegos.obtenerTodosVideojuegos());

juegos.actualizarVideojuego(2, { precio: 200000 });

const buscarPorId = juegos.obtenerVidioGame(2);
console.log(buscarPorId);

juegos.actualizarVideojuego(1, { precio: 170000 });

juegos.eliminarVideojuego(2);

console.log(juegos.obtenerTodosVideojuegos());