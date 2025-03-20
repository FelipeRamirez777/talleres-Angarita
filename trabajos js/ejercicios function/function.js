function comprobarZ (cadena){

    for (let index = 0; index < cadena.length; index++){
     if (cadena[index] == "Z"){
        return true;
     } } return false;
}

let palabra = comprobarZ ("Sanahoria");
console.log(palabra);