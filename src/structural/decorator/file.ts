interface DataSource {
  readData(): string;
  writeData(data: string): void;
}

class LocalDataSource implements DataSource {
  private data: string = '';

  readData(): string {
    return this.data;
  }

  writeData(data: string): void {
    this.data = data;
  }
}

class BaseDataSourceDecorator implements DataSource {
  protected wrappee: DataSource;

  constructor(source: DataSource) {
    this.wrappee = source;
  }

  readData(): string {
    return this.wrappee.readData();
  }

  writeData(data: string): void {
    this.wrappee.writeData(data);
  }
}

class EncryptionDecorator extends BaseDataSourceDecorator {
  readData(): string {
    return this.decrypt(super.readData());
  }

  writeData(data: string): void {
    super.writeData(this.encrypt(data));
  }

  private encrypt(data: string): string {
    return data.split('').reverse().join('');
  }

  private decrypt(data: string): string {
    return this.encrypt(data);
  }
}

class CompressionDecorator extends BaseDataSourceDecorator {
  readData(): string {
    return this.decompress(super.readData());
  }

  writeData(data: string): void {
    super.writeData(this.compress(data));
  }

  private compress(data: string): string {
    return data.substring(0, 5);
  }

  private decompress(data: string): string {
    return data + '...';
  }
}

const source = new LocalDataSource();
const encrypted = new EncryptionDecorator(source);
const compressed = new CompressionDecorator(encrypted);

source.writeData('datawdsddssdsd');
console.log(source.readData());

encrypted.writeData('data');
console.log(encrypted.readData());

compressed.writeData('datasssssss');
console.log(compressed.readData());
