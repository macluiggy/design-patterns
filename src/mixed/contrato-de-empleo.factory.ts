import { AbstractDocumentFactory } from "./abstract-document-factory";

export class ContratoDeEmpleoFactory extends AbstractDocumentFactory {
  createDocumentPdf() {
    return {
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Contrato de empleo en PDF",
    };
  }
  createDocumentWord() {
    return {
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Contrato de empleo en Word",
    };
  }
  createDocumentHtml() {
    return {
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Contrato de empleo en HTML",
    };
  }
  createDocumentText() {
    return {
      logo: this.logo,
      footer: this.footer,
      metadata: this.metadata,
      content: "Contrato de empleo en texto plano",
    };
  }
}