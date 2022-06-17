import { Users } from "../../models/index.js";

export class FindOneUserUseCase {
   constructor() {}

   async listarOne(req) {
      const { id } = req.params;
      const user = await Users.findByPk(id);

      return user;
   }
}
