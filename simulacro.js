class persona{

    #nombre;

    constructor(nombre){
        this.#nombre = nombre;
    }

    caminar(){
        return `${this.#nombre} esta caminando.`;
    }

    getNombre(){
        return `${this.#nombre} esta trabajando`;
    }
}

class empleado extends persona {

    #salario;

   constructor(nombre,salario){
    super(nombre);
    this.#salario = salario;    
   }
    
   trabajar(){
   return this.getNombre();
   }

   getSalario(){
    return this.#salario;
 }

   setSalario(salario){
    if (salario > 0){
        this.#salario = salario;
    } else {
        console.log("ingrese un valor valido");
    }
 }
 setEdad(edad){
    this.edad = edad;
    console.log(`${this.getNombre()} y tiene una edad de ${this.edad}`); 
 }
}

class CuentaBancaria{

    #saldo;

    constructor(saldoInicial = 0){
        this.#saldo = saldoInicial;
    }

    #actualizarSaldo() {
        console.log(`el monto de su cuenta actualizado es $${this.#saldo}`)
      }

    depositar(monto){
        if(monto > 0){
            this.#saldo += monto;
            console.log(`deposito exitoso, deposito +$${monto}`);
            this.#actualizarSaldo();
        } else {
            console.log(`monto invalido`);
        }
        
    }

    retirar (monto){
        if(monto > 0 && monto <= this.#saldo){
            this.#saldo -= monto;
            console.log(`retiro exitoso, retiro -$${monto}`);
            this.#actualizarSaldo();
        } else {
            console.log(`monto invalido`);
        }
    
    }

}

class Vehiculo {

    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    #encenderMotor(){
        return `el carro de modelo ${this.modelo} y marca ${this.marca} encendio su motor y arranco.`
    }

    arrancar(){
       return this.#encenderMotor();
    }

    mover1(){
        return `coche`;
    }

    mover2(){
        return `bicicleta`;
    }
}

class coche extends Vehiculo {
    constructor(marca, modelo, color){
        super(marca, modelo);
        this.color = color;
    }

    Mover1(){
        return `el carro de marca ${this.marca} y modelo ${this.modelo} de color ${this.color} se esta moviendo.`;
    }

}

class bicicleta extends Vehiculo {
    constructor(marca, modelo, color){
        super(marca, modelo);
        this.color = color;
    }

    mover2(){
        return `la bicicleta de marca ${this.marca} y modelo ${this.modelo} de color ${this.color} se esta moviendo.`;
    }
}

class EmpresaTransporte{

    static totalEmpleados = 0;

    static  registrarEmpleado(){
        EmpresaTransporte.totalEmpleados++;
        console.log("empleados registrados = " + this.totalEmpleados);
    }
    
    asignarVehiculo(empleado, vehiculo){
        this.empleado = empleado;
        this.vehiculo = vehiculo;
       console.log(`al empleado ${this.empleado} se le asignara el vehiculo ${this.vehiculo}`);
    } 
}

const persona1 = new persona ("itachi");
console.log(persona1.caminar());

const empleado1 = new empleado ("jaime","800.000");
console.log(empleado1.trabajar());
console.log(empleado1.getSalario());
empleado1.setSalario("777.000");
console.log(empleado1.getSalario());
empleado1.setEdad("20");
empleado1.setEdad("30");

const valorInicial = new CuentaBancaria (200);
valorInicial.depositar(50);
valorInicial.retirar(10);

const vehi = new Vehiculo("nissan","deportivo");
console.log(vehi.arrancar());

const car = new coche ("supra", "camioneta", "azul");
const cycle = new bicicleta ("piraña", "todoterreno", "negra");
console.log(car.Mover1());
console.log(cycle.mover2());

EmpresaTransporte.registrarEmpleado();
EmpresaTransporte.registrarEmpleado();
EmpresaTransporte.registrarEmpleado();

const empre = new EmpresaTransporte();
empre.asignarVehiculo("felipe", "GTR");


