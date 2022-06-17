import { Users } from "../../models/index.js";
import { hashPassword } from "../../../shared/utils/password/password.js";

export class UpdateUserUseCase {
   constructor() {}

   async existeUser(id) {
      const count = await Users.count({ where: { id } });
      return count;
   }
   matchUser(id, tokenid) {
      return id == tokenid;
   }

   async updateUser(id, data) {
      const { name, email, apartament, password } = data;
      const newPassword = hashPassword(password);

      await Users.update(
         { name, email, apartament, password: newPassword },
         { where: { id } }
      );
      const updatedUser = await Users.findByPk(id);
      return updatedUser;
   }
}
