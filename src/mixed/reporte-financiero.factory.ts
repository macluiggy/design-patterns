import { AbstractDocumentFactory, IDocumentWithPrototype } from "./abstract-document-factory";
import { HtmlDocument } from "./html-document";
import { TextDocument } from "./text-document";
import { WordDocument } from "./word-document";
import { PdfDocument } from "./pdf-document";

export class ReporteFinancieroFactory extends AbstractDocumentFactory {
  createDocumentPdf() {
    return new PdfDocument({
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Reporte financiero en PDF",
    } as PdfDocument);
 
  }
  createDocumentWord() {
    return new WordDocument({
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Reporte financiero en Word",
    } as WordDocument);
  }
  createDocumentHtml() {
    return new HtmlDocument({
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Reporte financiero en HTML",
    }) as unknown as IDocumentWithPrototype;
  }
  createDocumentText() {
    return new TextDocument({
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Reporte financiero en texto plano",
    } as TextDocument);
  }
}