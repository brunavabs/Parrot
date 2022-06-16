import { Users } from "../../../models/index.js";

export class DestroyUserUseCase {
  static async existeUser(id) {
    const count = await Users.count({ where: { id } });
    return count;
  }
  static matchUser(id, tokenid) {
    return id == tokenid;
  }
  static async destroyUser(id){
      await Users.destroy({where: {id}})
  }
}
