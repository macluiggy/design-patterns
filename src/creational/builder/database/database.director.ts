import { DatabaseBuilder } from "./database.builder";

export class DatabaseDirector {
  static createPostgresDatabase(builder: DatabaseBuilder) {
    return builder
      .reset()
      .setHost("localhost")
      .setPort(5432)
      .setDatabase("mydb")
      .setUsername("admin")
      .setPassword("admin")
  }
}