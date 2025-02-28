export interface IDocument {
  logo: string;
  footer: string;
  metadata: { [key: string]: string };
  content: string
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
  abstract createDocumentPdf(): IDocumentPdf;
  abstract createDocumentWord(): IDocumentWord;
  abstract createDocumentHtml(): IDocumentHtml;
  abstract createDocumentText(): IDocumentText;
}