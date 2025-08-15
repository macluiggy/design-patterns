export interface Database {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  connect(): void;
}