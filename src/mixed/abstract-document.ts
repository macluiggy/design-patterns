import { IDocument } from "./abstract-document-factory";
import { DocumentPrototype } from "./document-prototype";

export abstract class AbstractDocument implements DocumentPrototype {
  logo: string;
  footer: string;
  metadata: { [key: string]: string };
  content: string;

  constructor({
    logo,
    footer,
    metadata,
    content,
  }: AbstractDocument) {
    this.logo = logo;
    this.footer = footer;
    this.metadata = metadata;
    this.content = content;
  }

 abstract clone(): AbstractDocument;
}