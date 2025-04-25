class Contador {
    static cuenta = 0;
  
    static incrementar(){
      Contador.cuenta++;
      
    }
  }
  
  console.log(Contador.cuenta); 
  Contador.incrementar();
  Contador.incrementar();
  Contador.incrementar();
  console.log(Contador.cuenta); 
  

  