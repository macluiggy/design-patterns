export interface Report {
  title: string;
  date: Date;
  clone(): Report;
}