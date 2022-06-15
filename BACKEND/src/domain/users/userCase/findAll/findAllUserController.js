import { FindAllUserUseCase } from "./findAllUserUseCase.js";

export class FindAllUserController {
  static async listarUsers(req, res) {
    try {
      const listarUser = await FindAllUserUseCase.listarUser();
      res.status(200).json(listarUser);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Deu errado!" });
    }
  }
}
