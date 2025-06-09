class Amplifier {
  on(): void {
    console.log("Amplifier is on");
  }

  off(): void {
    console.log("Amplifier is off");
  }

  setVolume(level: number): void {
    console.log(`Setting volume to ${level}`);
  }
}

class DVDPlayer {
  on(): void {
    console.log("DVD Player is on");
  }

  off(): void {
    console.log("DVD Player is off");
  }

  play(movie: string): void {
    console.log(`Playing movie: ${movie}`);
  }

  stop(): void {
    console.log("Stopping movie");
  }
}
class Projector {
  on(): void {
    console.log("Projector is on");
  }

  off(): void {
    console.log("Projector is off");
  }

  setInput(input: string): void {
    console.log(`Setting projector input to ${input}`);
  }
}

class HomeTheaterFacade {
  private amplifier: Amplifier;
  private dvdPlayer: DVDPlayer;
  private projector: Projector;

  constructor(amplifier: Amplifier, dvdPlayer: DVDPlayer, projector: Projector) {
    this.amplifier = amplifier;
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
  }

  watchMovie(movie: string): void {
    console.log("Getting ready to watch a movie...");
    this.amplifier.on();
    this.amplifier.setVolume(5);
    this.projector.on();
    this.projector.setInput("DVD");
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  endMovie(): void {
    console.log("Shutting down the home theater...");
    this.dvdPlayer.stop();
    this.dvdPlayer.off();
    this.projector.off();
    this.amplifier.off();
  }
}
// Example usage
const amplifier = new Amplifier();
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector);
homeTheater.watchMovie("Inception");
homeTheater.endMovie();
// Output:
// Getting ready to watch a movie...
// Amplifier is on
// Setting volume to 5
// Projector is on
// Setting projector input to DVD
// DVD Player is on
// Playing movie: Inception
// Shutting down the home theater...
// Stopping movie
// DVD Player is off
// Projector is off
// Amplifier is off

export { Amplifier, DVDPlayer, Projector, HomeTheaterFacade };
export default HomeTheaterFacade;