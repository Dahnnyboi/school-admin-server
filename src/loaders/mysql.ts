import { Sequelize } from "sequelize";
import { dbName, dbUser, dbPass, dbHost } from "@config/environment-keys";

const db = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: 3306,
  dialect: "mysql",
  query: {
    raw: true,
  },
  pool: {
    min: 1,
    max: 5,
    idle: 10000,
    acquire: 60000,
  },
});

export default db;
