import { Service, Inject } from "typedi";
import { Logger } from "winston";
import bcrypt from "bcrypt";

import { SALT_ROUNDS } from "@config/constants";
import { UserModel, UserRole } from "@models/user.model";
import { RoleModel } from "@models/role.model";

@Service()
class UserService {
  constructor(
    @Inject("logger") private logger: Logger,
    @Inject("user.model") private userModel: typeof UserModel,
    @Inject("role.model") private roleModel: typeof RoleModel,
    @Inject("user.role") private userRole: typeof UserRole
  ) {}

  public async createUser(
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    roleId: number
  ) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashPassword = await bcrypt.hash(password, salt);

    await this.userModel.create({
      email: email,
      first_name: firstName,
      last_name: lastName,
      salt: salt,
      password: hashPassword,
      role_id: roleId,
    });
  }

  public async findUser(name: string) {
    return await this.userModel.findOne({ where: { name: name } });
  }
}

export default UserService;
