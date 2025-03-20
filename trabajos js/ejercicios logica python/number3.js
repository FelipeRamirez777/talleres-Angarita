const continentes = {
    "America": ["Estados Unidos", "Brasil", "Argentina", "México", "Canadá"],
    "Europa": ["Alemania", "Francia", "Italia", "España", "Reino Unido"],
    "Africa": ["Nigeria", "Egipto", "Sudáfrica", "Marruecos", "Kenia"],
    "Asia": ["China", "India", "Japón", "Corea del Sur", "Tailandia"],
    "Oceania": ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa"]
};

let continente = prompt("Ingrese un continente (América, Europa, África, Asia, Oceanía):");

if (continentes[continente]) {
   alert(`Países en ${continente}:`);
    for (pais of continentes[continente]) {
             alert("- " + pais);
    }
} else {
    alert("Continente no válido. Intente de nuevo.");
}