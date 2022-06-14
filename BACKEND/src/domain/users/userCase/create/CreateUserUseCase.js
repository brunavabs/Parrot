import User from "../../../models/Users";
import bcryp from "bcryptjs";

export class CreateUserUseCase {
  static async registroUser(data) {
    const { nome, email, apartament, password } = data;
    const newPassword = bcrypt.hashSync(password, 10);

    const novoUser = await User.create({
      nome,
      email,
      apartament,
      password: newPassword,
    });

    return novoUser;
  }
}
