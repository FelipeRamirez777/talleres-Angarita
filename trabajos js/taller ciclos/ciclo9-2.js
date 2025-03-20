let salir = false;

while (!salir) {
    let respuesta = prompt("¿Desea salir? (S/N)").toUpperCase(); 
    
    if (respuesta === "S") {
        salir = true;
        console.log("Programa finalizado.");
    } else {
        console.log("El programa sigue ejecutándose...");
    }
}
