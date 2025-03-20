function mostrarImpares(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) { 
            console.log(i);
        }
    }
}

const n = 20;
console.log(`Números impares entre 1 y ${n}:`);
mostrarImpares(n);
