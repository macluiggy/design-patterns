import { GraphicReport } from "./graphic-report";

const report = new GraphicReport();
report.title = "Graphic Report";
report.date = new Date();
report.graphic = "Some graphic content";
const clonedReport = report.clone();
clonedReport.title = "Cloned Graphic Report";
clonedReport.date = new Date();
clonedReport.graphic = "Some cloned graphic content";

console.log(report);
console.log(clonedReport);