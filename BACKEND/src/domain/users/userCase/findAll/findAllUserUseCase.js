import User from "../../../models/Users.js";

export class FindAllUserUseCase {
  static async listarAll() {
    const users = await User.findAll();

    return (users);
  }
}
