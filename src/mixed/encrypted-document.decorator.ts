import { IDocumentWithPrototype } from "./abstract-document-factory";
import { BaseDocumentDecorator } from "./base-document.decorator";

export class EncryptedDocument extends BaseDocumentDecorator {
  constructor(wrapped: IDocumentWithPrototype) {
    super(wrapped);
    this.content = this.encrypt(wrapped.getContent());
  }

  print(): void {
    console.log("Encrypted Document");
    super.print();
  }

  getContent() {
    return this.decrypt(this.wrapped.getContent());
  }

  private encrypt(content: string): string {
    return content.split("").reverse().join("");
  }

  private decrypt(content: string): string {
    return this.encrypt(content);
  }
}