import { Users } from "../../../models/index.js";

export class UpdateUserUseCase {
  static async existeUser(id) {
    const count = await Users.count({ where: {id} });
    return count;
  }
  static matchUser(id, tokenid) {
    return id == tokenid;
  }

  static async updateUser(id, data) {
    await Users.update(data.body, { where: {id} });
    const updatedUser = await Users.findByPk(id);
    return updatedUser;
  }
}
