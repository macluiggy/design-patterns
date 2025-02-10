import { DatabaseBuilder } from "./database.builder";
import { Database } from "./database";
import { Postgres } from "./postgres";

export class PostgresBuilder implements DatabaseBuilder {
  private database: Database;

  reset() {
    this.database = {
      host: "",
      port: 0,
      database: "",
      username: "",
      password: "",
      connect() {
        console.log("Connecting to Postgres database...");
      },
    };
    return this;
  }

  setHost(host: string): PostgresBuilder {
    this.database.host = host;
    return this;
  }

  setPort(port: number): PostgresBuilder {
    this.database.port = port;
    return this;
  }

  setDatabase(database: string): PostgresBuilder {
    this.database.database = database;
    return this;
  }

  setUsername(username: string): PostgresBuilder {
    this.database.username = username;
    return this;
  }

  setPassword(password: string): PostgresBuilder {
    this.database.password = password;
    return this;
  }

  build(): Postgres {
    const result = new Postgres(this.database);
    this.reset();
    return result;
  }

  getResult(): Database {
    return this.database;
  }
}