import { AbstractDocumentFactory, IDocumentWithPrototype } from "./abstract-document-factory";
import { HtmlDocument } from "./html-document";
import { TextDocument } from "./text-document";
import { WordDocument } from "./word-document";
import { PdfDocument } from "./pdf-document";

export class ContratoDeEmpleoFactory extends AbstractDocumentFactory {
  createDocumentPdf() {
    return new PdfDocument({
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Contrato de empleo en PDF",
    } as PdfDocument);
  }
  createDocumentWord() {
    return new WordDocument({
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Contrato de empleo en Word",
    } as WordDocument);
  }
  createDocumentHtml() {
    return new HtmlDocument({
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Contrato de empleo en HTML",
    }) as unknown as IDocumentWithPrototype;
  }
  createDocumentText() {
    return new TextDocument({
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Contrato de empleo en texto plano",
    } as TextDocument);
  }
}