import { Container } from "typedi";
import UserService from "@services/user.service";
import RoleService from "@services/role.service";
import { UserModel, UserRole } from "@models/user.model";
import { RoleModel } from "@models/role.model";

import logger from "@utils/logger";

// Logger Container
Container.set("logger", logger);

// User Containers
Container.set("user.model", UserModel);
Container.set("user.role", UserRole);

// Role Containers
Container.set("role.model", RoleModel);

export const UserInstance = Container.get(UserService);
export const RoleInstance = Container.get(RoleService);
