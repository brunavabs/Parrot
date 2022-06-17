import { Users } from "../../models/index.js";

export class FindOneUserUseCase {
   constructor() {}

   async listarOne(id) {
      const user = await Users.findByPk(id);
      return user;
   }
}
