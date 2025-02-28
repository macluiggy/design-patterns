import { AbstractDocumentFactory } from "./abstract-document-factory";

export class ReporteFinancieroFactory extends AbstractDocumentFactory {
  createDocumentPdf() {
    return {
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Reporte financiero en PDF",
    };
  }
  createDocumentWord() {
    return {
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Reporte financiero en Word",
    };
  }
  createDocumentHtml() {
    return {
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Reporte financiero en HTML",
    };
  }
  createDocumentText() {
    return {
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Reporte financiero en texto plano",
    };
  }
}