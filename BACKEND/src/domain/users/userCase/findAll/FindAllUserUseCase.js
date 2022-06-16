import {Users} from "../../../models/index.js";

export class FindAllUserUseCase {
  static async listarAll() {
    const users = await Users.findAll();

    return (users);
  }
}
