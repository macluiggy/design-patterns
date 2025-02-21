interface VideiGameConsole {
  playGame(): void;
}

export class PlayStation implements VideiGameConsole {
  playGame() {
    console.log('Playing game on PlayStation');
  }
}

export class Xbox implements VideiGameConsole {
  playGame() {
    console.log('Playing game on Xbox');
  }
}

export class Nintendo implements VideiGameConsole {
  playGame() {
    console.log('Playing game on Nintendo');
  }
}

interface VideoGame {
  play(): void;
}

abstract class AbstractVideoGame implements VideoGame {
  constructor(protected console: VideiGameConsole) {}

  abstract play(): void;
}

export class CallOfDuty extends AbstractVideoGame {
  play() {
    console.log('Playing Call of Duty');
    this.console.playGame();
  }
}

export class Halo extends AbstractVideoGame {
  play() {
    console.log('Playing Halo');
    this.console.playGame();
  }
}

export class Mario extends AbstractVideoGame {
  play() {
    console.log('Playing Mario');
    this.console.playGame();
  }
}

interface PcGame {
  playOnPc(): void;
}

class CallOfDutyPcAdapter implements PcGame {
  constructor(private callOfDuty: CallOfDuty) {}

  playOnPc() {
    console.log('Playing Call of Duty on PC');
    this.callOfDuty.play();
  }
}

class HaloPcAdapter implements PcGame {
  constructor(private halo: Halo) {}

  playOnPc() {
    console.log('Playing Halo on PC');
    this.halo.play();
  }
}

class MarioPcAdapter implements PcGame {
  constructor(private mario: Mario) {}

  playOnPc() {
    console.log('Playing Mario on PC');
    this.mario.play();
  }
}

// usage

const ps = new PlayStation();
const xbox = new Xbox();
const nintendo = new Nintendo();

const callOfDuty = new CallOfDuty(ps);
callOfDuty.play();

const halo = new Halo(xbox);
halo.play();

const mario = new Mario(nintendo);
mario.play();

const callOfDutyInNintendo = new CallOfDuty(nintendo);
callOfDutyInNintendo.play();

const haloInNintendo = new Halo(nintendo);
haloInNintendo.play();

const marioInXbox = new Mario(xbox);
marioInXbox.play();

// a port of CallOfDuty to PC
const callOfDutyPcAdapter = new CallOfDutyPcAdapter(callOfDuty);
callOfDutyPcAdapter.playOnPc();

// a port of Halo to PC
const haloPcAdapter = new HaloPcAdapter(halo);
haloPcAdapter.playOnPc();

// a port of Mario to PC
const marioPcAdapter = new MarioPcAdapter(mario);
marioPcAdapter.playOnPc();


