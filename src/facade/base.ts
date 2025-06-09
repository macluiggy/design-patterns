// Base subsistemas
class BaseSubsystemA {
  operationA(): void {
    console.log("BaseSubsystemA: Ejecutando operación A");
  }
}

class BaseSubsystemB {
  operationB(): void {
    console.log("BaseSubsystemB: Ejecutando operación B");
  }
}

class BaseSubsystemC {
  operationC(): void {
    console.log("BaseSubsystemC: Ejecutando operación C");
  }
}

// Facade
class BaseFacade {
  private subsystemA: BaseSubsystemA;
  private subsystemB: BaseSubsystemB;
  private subsystemC: BaseSubsystemC;

  constructor() {
    this.subsystemA = new BaseSubsystemA();
    this.subsystemB = new BaseSubsystemB();
    this.subsystemC = new BaseSubsystemC();
  }

  // Método simplificado para el cliente
  simpleOperation(): void {
    console.log("BaseFacade: Iniciando operación simple...");
    this.subsystemA.operationA();
    this.subsystemB.operationB();
    this.subsystemC.operationC();
    console.log("BaseFacade: Operación simple terminada.");
  }
}

// Uso
const facade = new BaseFacade();
facade.simpleOperation();