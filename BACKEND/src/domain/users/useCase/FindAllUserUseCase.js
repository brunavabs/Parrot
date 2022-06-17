import { Users } from "../../models/index.js";

export class FindAllUserUseCase {
   constructor() {}

   async listarAll() {
      const users = await Users.findAll();

      return users;
   }
}
