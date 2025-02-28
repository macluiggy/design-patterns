import { IDocument, IDocumentHtml } from "./abstract-document-factory";

export class HtmlDocument implements IDocumentHtml {
  logo: string;
  footer: string;
  metadata: { [key: string]: string };
  content: string;

  constructor({
    logo,
    footer,
    metadata,
    content,
  }: IDocumentHtml) {
    this.logo = logo;
    this.footer = footer;
    this.metadata = metadata;
    this.content = content;
  }
  clone(): IDocument {
    return new HtmlDocument(this);
  }
}