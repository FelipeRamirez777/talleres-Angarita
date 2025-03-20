function esPrimo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false; 
    }
    return true; 
  }
  
  let numero = parseInt(prompt("Introduce un número entre 1 y 15:"));
  
  if (numero >= 1 && numero <= 15) {
    if (esPrimo(numero)) {
      console.log(`${numero} es un número primo.`);
    } else {
      console.log(`${numero} no es un número primo.`);
    }
  } else {
    console.log("Por favor, introduce un número entre 1 y 15.");
  }
  