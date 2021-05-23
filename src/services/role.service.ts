import { Service, Inject } from "typedi";
import { Logger } from "winston";
import { RoleModel } from "@models/role.model";

@Service()
class RoleService {
  constructor(
    @Inject("logger") private logger: Logger,
    @Inject("role.model") private roleModel: typeof RoleModel
  ) {}

  public async createRole(name: string) {
    await this.roleModel.create({ name: name });
  }

  public async findRole(name: string): Promise<any> {
    const result = await this.roleModel.findOne({ where: { name: name } });

    return result;
  }
}

export default RoleService;
