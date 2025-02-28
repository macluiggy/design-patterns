import { DocumentPrototype } from "./document-prototype";
import { HtmlDocument } from "./html-document";
import { PdfDocument } from "./pdf-document";
import { TextDocument } from "./text-document";
import { WordDocument } from "./word-document";

export interface IDocument {
  logo: string;
  footer: string;
  metadata: { [key: string]: string };
  content: string
}

export interface IDocumentWithPrototype extends IDocument, DocumentPrototype<IDocumentWithPrototype> {
  print(): void
  getContent(): string
}

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
  abstract createDocumentWord(): WordDocument;
  abstract createDocumentHtml(): HtmlDocument;
  abstract createDocumentText(): TextDocument;
}