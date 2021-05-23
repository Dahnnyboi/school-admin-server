import { Router, Request, Response, NextFunction } from "express";
import { RoleInstance } from "@config/container-instances";
import logger from "@utils/logger";

const route = Router();

export default (app: Router) => {
  app.use("/roles", route);

  route.post(
    "/create",
    async (req: Request, res: Response, next: NextFunction) => {
      const { name } = req.body;

      try {
        await RoleInstance.createRole(name);
        logger.info("Successfully created a role!");
        res.status(200).json({ message: "Successfully created a role!" });
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );
};
