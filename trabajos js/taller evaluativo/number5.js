let persona = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};

persona.peso = 77;
//console.log(persona.peso);

let clave = "edad"
persona[clave]= 21;
//console.log(persona.edad);

//delete persona["apellidos"];
delete persona.apellidos;

for (claves in persona) 
    console.log(persona[claves]);