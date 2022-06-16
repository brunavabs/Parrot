import { Users } from "../../../models/index.js";
import { hashPassword } from "../../../../shared/utils/password/password.js";

export class CreateUserUseCase {
   static async registroUser(data) {
      const { name, email, apartament, password } = data;
      const count = await Users.count({ where: { email } });

      if (count) {
         return false;
      }

      const newPassword = hashPassword(password);

      const novoUser = await Users.create({
         name,
         email,
         apartament,
         password: newPassword,
      });

      return novoUser;
   }
}
