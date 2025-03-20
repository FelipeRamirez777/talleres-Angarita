let numero = parseInt(prompt("ingrese numero"));

if (numero % 2 === 0) {
    alert(`El numero ${numero} es par`);
} else {
    alert(`El numero ${numero} es impar`);
}

switch (numero % 2 === 0) {
    case true:
        alert(`El numero ${numero} es par`);
        break;
    case false:
        alert(`El numero ${numero} es impar`);
        break;
}