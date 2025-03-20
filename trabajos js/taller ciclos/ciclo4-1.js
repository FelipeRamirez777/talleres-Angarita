let angulo1 = parseInt(prompt("ingrese primer angulo"));

let angulo2 = parseInt(prompt("ingrese segundo angulo"));

let angulo3 = parseInt(prompt("ingrese tercer angulo"));

if (angulo1 + angulo2 + angulo3 === 180) {
    alert(`sus angulos corresponden a un triangulo`);
} else {
    alert(`sus angulos no corresponden a un triangulo`);
}

switch (angulo1 + angulo2 + angulo3 === 180) {
    case true:
        alert(`sus angulos corresponden a un triangulo`);
        break;
    case false:
        alert(`sus angulos no corresponden a un triangulo`);
        break;
}