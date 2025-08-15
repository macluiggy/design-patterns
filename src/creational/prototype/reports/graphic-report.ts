import { Report } from "./report";

export class GraphicReport implements Report {
  public title: string;
  public date: Date;
  public graphic: string;
  // Added an array property called "elements"
  public elements: any[];

  constructor(sourceOrTitle?: GraphicReport) {
    if (!sourceOrTitle) {
      return;
    }
    this.title = sourceOrTitle.title;
    this.date = sourceOrTitle.date;
    this.graphic = sourceOrTitle.graphic;
    // Copy array logic: creates a shallow copy of the elements array
    this.elements = sourceOrTitle.elements ? [...sourceOrTitle.elements] : [];
  }

  public clone(): GraphicReport {
    return new GraphicReport(this);
  }
}