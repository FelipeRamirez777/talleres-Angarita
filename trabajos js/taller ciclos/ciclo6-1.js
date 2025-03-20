let numero = parseInt(prompt("ingrese su numero"));

if (numero < 5) {
    alert(`su numero ${numero} no es divisible entre 5`)
} else if (numero > 5) {
    alert(`su numero ${numero} es divisible entre 5`)}


switch (numero < 5) {
    case true:
        alert(`su ${numero} no es divisible entre 5`)
        break;
    case false:
        alert(`su ${numero} es divisible entre 5`)
        break;
}
