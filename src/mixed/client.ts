import { AbstractDocumentFactory } from "./abstract-document-factory";
import { ContratoDeEmpleoFactory } from "./contrato-de-empleo.factory";

export class Client {
  constructor(private documentFactory: AbstractDocumentFactory) {}

  createDocuments() {
    const pdf = this.documentFactory.createDocumentPdf();
    const word = this.documentFactory.createDocumentWord();
    const html = this.documentFactory.createDocumentHtml();
    const text = this.documentFactory.createDocumentText();

    return { pdf, word, html, text };
  }
}

const contratoDeEmpleoFactory = new ContratoDeEmpleoFactory({
  logo: "Logo de la empresa",
  footer: "Pie de página de la empresa",
  metadata: {
    fecha: "2021-09-01",
    autor: "John Doe",
  },
  content: "Contenido del contrato de empleo",
});

const client = new Client(contratoDeEmpleoFactory);
const documents = client.createDocuments();
console.log(documents);