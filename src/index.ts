import "module-alias/register";
import "reflect-metadata";

import loaders from "@loaders/index";
import express from "express";
import { PORT } from "@config/constants";
import logger from "@utils/logger";

const app = express();

function startServer() {
  const app = express();

  loaders(app);

  app.listen(PORT, () => {
    logger.info(`Server is running at port ${PORT}`);
  });
}

startServer();
