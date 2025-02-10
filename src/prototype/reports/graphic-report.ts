import { Report } from "./report";

export class GraphicReport implements Report {
  public title: string;
  public date: Date;
  public graphic: string;
  constructor(sourceOrTitle?: GraphicReport) {
    if (!sourceOrTitle) {
      return;
    }
    this.title = sourceOrTitle.title;
    this.date = sourceOrTitle.date;
    this.graphic = sourceOrTitle.graphic;
  }
  public clone(): GraphicReport {
    return new GraphicReport(this);
  }
}