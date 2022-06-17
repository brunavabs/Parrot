import { Users } from "../../models/index.js";

export class DestroyUserUseCase {
   constructor() {}

   async existeUser(id) {
      const count = await Users.count({ where: { id } });
      return count;
   }
   matchUser(id, tokenid) {
      return id == tokenid;
   }
   async destroyUser(id) {
      await Users.destroy({ where: { id } });
   }
}
