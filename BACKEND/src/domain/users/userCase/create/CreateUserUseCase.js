import User from "../../../models/Users.js";
import { hashPassword } from "../../../../shared/utils/password/password.js";

export class CreateUserUseCase {
  static async registroUser(data) {
    const { nome, email, apartament, password } = data;
    const newPassword = hashPassword(password);

    const novoUser = await User.create({
      nome,
      email,
      apartament,
      password: newPassword,
    });

    return novoUser;
  }
}
