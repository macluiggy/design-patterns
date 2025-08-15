interface Files {
  scan(): void;
  open(): void;
  getPath(): string;
  setParent(parent: Directory | null): void;
}

class ConcreteFile implements Files {
  name: string;
  private parent: Directory | null = null;

  constructor({ name }: { name: string }) {
    this.name = name;
  }

  scan(): void {
    console.log(`Scanning file ${this.getPath()}`);
  }

  open(): void {
    console.log(`Opening file ${this.getPath()}`);
  }

  getPath(): string {
    if (this.parent) {
      return `${this.parent.getPath()}/${this.name}`;
    }
    return this.name;
  }

  setParent(parent: Directory | null): void {
    this.parent = parent;
  }
}

class Directory implements Files {
  private files: Files[] = [];
  name: string;
  private parent: Directory | null = null;

  constructor({ name }: { name: string }) {
    this.name = name;
  }

  scan(): void {
    console.log(`Scanning directory ${this.getPath()}`);
    this.files.forEach(file => file.scan());
  }

  open(): void {
    console.log(`Opening directory ${this.getPath()}`);
    this.files.forEach((file, index) => {
      console.log(`Opening file ${index + 1}`);
      file.open();
    });
  }

  addFile(file: Files): void {
    this.files.push(file);
    file.setParent(this);
  }

  getPath(): string {
    if (this.parent) {
      return `${this.parent.getPath()}/${this.name}`;
    }
    return this.name;
  }

  setParent(parent: Directory | null): void {
    this.parent = parent;
  }
}

const file = new ConcreteFile({
  name: 'file.txt',
});
const file2 = new ConcreteFile({
  name: 'file2.txt',
});
const file3 = new ConcreteFile({
  name: 'file3.txt',
});
const file4 = new ConcreteFile({
  name: 'file4.txt',
});
const directory = new Directory({
  name: 'directory',
});
const directory2 = new Directory({
  name: 'directory2',
});
directory2.addFile(file4);
directory.addFile(directory2);
directory.addFile(file);
directory.addFile(file2);
directory.addFile(file3);
directory.scan();
directory.open();
