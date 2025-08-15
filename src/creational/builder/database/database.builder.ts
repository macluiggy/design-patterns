import { Database } from "./database";

export interface DatabaseBuilder {
  reset(): DatabaseBuilder;
  setHost(host: string): DatabaseBuilder;
  setPort(port: number): DatabaseBuilder;
  setDatabase(database: string): DatabaseBuilder;
  setUsername(username: string): DatabaseBuilder;
  setPassword(password: string): DatabaseBuilder;
  build(): Database;
}