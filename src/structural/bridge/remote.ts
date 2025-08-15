interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

class TV implements Device {
  private enabled = false;
  private volume = 50;
  private channel = 1;

  isEnabled() {
    return this.enabled;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(percent: number) {
    this.volume = percent;
  }

  getChannel() {
    return this.channel;
  }

  setChannel(channel: number) {
    this.channel = channel;
  }
}

class Radio implements Device {
  private enabled = false;
  private volume = 30;
  private channel = 1;

  isEnabled() {
    return this.enabled;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(percent: number) {
    this.volume = percent;
  }

  getChannel() {
    return this.channel;
  }

  setChannel(channel: number) {
    this.channel = channel;
  }
}

interface Remote {
  power(): void;
  volumeDown(): void;
  volumeUp(): void;
  channelDown(): void;
  channelUp(): void;
}

class BasicRemote implements Remote {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  power() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

class AdvancedRemote extends BasicRemote {
  mute() {
    this.device.setVolume(0);
  }
}

const tv = new TV();
const radio = new Radio();

const basicRemote = new BasicRemote(tv);
console.log(tv);

basicRemote.power();
basicRemote.volumeUp();
basicRemote.volumeUp();
basicRemote.channelUp();
basicRemote.channelUp();
basicRemote.channelDown();
console.log(tv);