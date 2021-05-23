import express from "express";
import expressLoader from "./express";
import logger from "@utils/logger";
import sequelize from "./mysql";

export default async (expressApp: express.Application) => {
  expressLoader({ app: expressApp });
  logger.info("Express is Loaded!");

  try {
    await sequelize.authenticate();
    logger.info("Successfully connected to mysql");
    await sequelize.sync();
    const results = sequelize.query("show tables").then(function (rows) {
      console.log(JSON.stringify(rows));
    });
  } catch (e) {
    logger.error(e);
    throw new Error("Failed to connect to mysql!");
  }
};
