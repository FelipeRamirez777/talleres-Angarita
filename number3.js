class CuentaBancaria {

    #saldo;

    constructor(saldoInial = 0) {
        this.#saldo = saldoInial;
    }

    depositar(monto){
        if(monto > 0){
            this.#saldo += monto;
            console.log(`deposito exitoso +$${monto}`);
        } else {
            console.log(`monto invalido`);
        }
    }

    retirar (monto){
        if(monto > 0 && monto <= this.#saldo){
            this.#saldo -= monto;
            console.log(`retiro exitoso -$${monto}`);
        } else {
            console.log(`monto invalido`);
        }
    }

    consultarSaldo(){
        console.log(`su saldo actual es $${this.#saldo}`);
    }
}   

    const cuenta = new CuentaBancaria (100);
    
    cuenta.depositar(50);
    cuenta.retirar(30);
    cuenta.consultarSaldo();

