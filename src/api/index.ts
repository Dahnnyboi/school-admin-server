import { Router } from "express";
import users from "./routes/users";
import roles from "./routes/roles";

export default () => {
  const app = Router();
  users(app);
  roles(app);

  return app;
};
