import { Database } from "./database";

export class Postgres implements Database {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  constructor(database: Database) {
    this.host = database.host;
    this.port = database.port;
    this.database = database.database;
    this.username = database.username;
    this.password = database.password;
  }

  connect(): void {
    console.log("Connecting to PostgreSQL...");
  }
}