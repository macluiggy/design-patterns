import {
  IDocumentWithPrototype
} from "./abstract-document-factory";

export class BaseDocumentDecorator implements IDocumentWithPrototype {
  wrapped: IDocumentWithPrototype;
  logo: string; 
  footer: string;
  metadata: { [key: string]: string };
  content: string;

  constructor(wrapped: IDocumentWithPrototype) {
    this.wrapped = wrapped;
  }
  
  clone(): IDocumentWithPrototype {
    return this.wrapped.clone();
  }

  getContent() {
    return this.wrapped.getContent();
  }
  print(): void {
    this.wrapped.print();
  }
}