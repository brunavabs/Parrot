import User from "../../../models/Users.js";

export class FindAllUserUseCase {
  static async listarUser() {
    const users = await User.findAll();

    return (users);
  }
}
