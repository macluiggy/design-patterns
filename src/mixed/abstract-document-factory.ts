import { DocumentPrototype } from "./document-prototype";

export interface IDocument {
  logo: string;
  footer: string;
  metadata: { [key: string]: string };
  content: string
}

export interface IDocumentWithPrototype extends IDocument, DocumentPrototype {}

export interface IDocumentPdf extends IDocument {
  content: string
}

export interface IDocumentWord extends IDocument {
  content: string
}

export interface IDocumentHtml extends IDocument {
  content: string
}

export interface IDocumentText extends IDocument {
  content: string
}

export abstract class AbstractDocumentFactory {
  protected logo: string;
  protected footer: string;
  protected metadata: { [key: string]: string };
  constructor({
    logo,
    footer,
    metadata,
  }: IDocument) {
    this.logo = logo;
    this.footer = footer;
    this.metadata = metadata;
  }
  abstract createDocumentPdf(): IDocumentWithPrototype;
  abstract createDocumentWord(): IDocumentWithPrototype;
  abstract createDocumentHtml(): IDocumentWithPrototype;
  abstract createDocumentText(): IDocumentWithPrototype;
}