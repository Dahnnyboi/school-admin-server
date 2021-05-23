import { Router, Request, Response, NextFunction } from "express";
import { UserInstance, RoleInstance } from "@config/container-instances";
import logger from "@utils/logger";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);

  route.post(
    "/signup",
    async (req: Request, res: Response, next: NextFunction) => {
      const { first_name, last_name, password, email, type } = req.body;

      const role = await RoleInstance.findRole(type);

      if (!role) {
        next({ message: "Cannot find the role you wanted to create!" });
      }

      try {
        await UserInstance.createUser(
          first_name,
          last_name,
          password,
          email,
          role!.id
        );
        logger.info("Succesffully created a user!");
        res.status(200).json({ message: "Successfully created a user!" });
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );
};
