import { AbstractDocument } from "./abstract-document";
import { IDocumentPdf } from "./abstract-document-factory";

export class PdfDocument extends AbstractDocument {
  logo: string;
  footer: string;
  metadata: { [key: string]: string };
  content: string;

  constructor({
    logo,
    footer,
    metadata,
    content,
  }: PdfDocument) {
    super({ logo, footer, metadata, content } as AbstractDocument);
    this.logo = logo;
    this.footer = footer;
    this.metadata = metadata;
    this.content = content;
  }

  clone(): AbstractDocument {
    return new PdfDocument(this);
  }
}