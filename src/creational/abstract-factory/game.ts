interface Game {
  name: string;
  play(): void;
}

// PlayStation Games
class GodOfWar implements Game {
  name = 'God of War';

  play() {
    console.log(`Playing ${this.name} on PlayStation`);
  }
}

class SpiderMan implements Game {
  name = 'Spiderman'

  play() {
    console.log(`Playing ${this.name} on PlayStation`);
  }
}

// Xbox Games
class Halo implements Game {
  name = 'Halo';

  play() {
    console.log(`Playing ${this.name} on Xbox`);
  }
}

class ForzaHorizon implements Game {
  name = 'Forza Horizon';

  play() {
    console.log(`Playing ${this.name} on Xbox`);
  }
}

// Nintendo Games
class Mario implements Game {
  name = 'Mario';

  play() {
    console.log(`Playing ${this.name} on Nintendo`);
  }
}

class Zelda implements Game {
  name = 'Zelda';

  play() {
    console.log(`Playing ${this.name} on Nintendo`);
  }
}

abstract class GameBungleFactory {
  abstract createGame1(): Game;
  abstract createGame2(): Game;
}

class PlayStation
  extends GameBungleFactory {
  createGame1(): Game {
    return new GodOfWar();
  }

  createGame2(): Game {
    return new SpiderMan();
  }
}

class Xbox
  extends GameBungleFactory {
  createGame1(): Game {
    return new Halo();
  }

  createGame2(): Game {
    return new ForzaHorizon();
  }
}

class Nintendo
  extends GameBungleFactory {
  createGame1(): Game {
    return new Mario();
  }

  createGame2(): Game {
    return new Zelda();
  }
}

// Usage
const playStation = new PlayStation();
const xbox = new Xbox();
const nintendo = new Nintendo();

const game1 = playStation.createGame1();
const game2 = playStation.createGame2();

game1.play();
game2.play();

const game3 = xbox.createGame1();
const game4 = xbox.createGame2();

game3.play();
game4.play();

const game5 = nintendo.createGame1();
const game6 = nintendo.createGame2();

game5.play();
game6.play();
