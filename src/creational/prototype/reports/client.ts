import { GraphicReport } from "./graphic-report";

const report = new GraphicReport();
report.title = "Graphic Report";
report.date = new Date();
report.graphic = "Some graphic content";
report.elements = ["Element 1", "Element 2", "Element 3"];
const clonedReport = report.clone();
clonedReport.title = "Cloned Graphic Report";
clonedReport.date = new Date();
clonedReport.graphic = "Some cloned graphic content";

console.log(report);
console.log(clonedReport);

const elementsAreEqual = report.elements === clonedReport.elements;
console.log(`Report elements and cloned report elements are the same: ${elementsAreEqual}`);
