interface Files {
  scan(): void;
  open(): void;
}

class ConcreteFile implements Files {
  name: string;
  constructor({ name }: { name: string }) {
    this.name = name;
  }
  scan(): void {
    console.log(`Scanning file ${this.name}`);
  }

  open(): void {
    console.log(`Opening file ${this.name}`);
  }
}

class Directory implements Files {
  private files: Files[] = [];
  name: string;
  constructor({ name }: { name: string }) {
    this.name = name;
  }

  scan(): void {
    console.log(`Scanning directory ${this.name}`);
    this.files.forEach(file => file.scan());
  }

  open(): void {
    console.log(`Opening directory ${this.name}`);
    this.files.forEach((file, index) => {
      console.log(`Opening file ${index + 1}`);
      file.open();
    });
  }

  addFile(file: Files): void {
    this.files.push(file);
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
