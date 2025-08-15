import { DatabaseDirector } from "./database.director";
import { PostgresBuilder } from "./postgress.builder";

const postgresBuilder = new PostgresBuilder();
const result1 = postgresBuilder
  .reset()
  .setHost("localhost")
  .setPort(54321)
  .setDatabase("mydb")
  .setUsername("admin")
  .setPassword("admin")
  .build();
console.log(result1);

DatabaseDirector.createPostgresDatabase(postgresBuilder);
const result2 = postgresBuilder.getResult();
console.log(result2);
