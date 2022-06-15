import { FindAllUserUseCase } from "./findAllUserUseCase.js";

export class FindAllUserController {
  static async listarAll(req, res) {
    try {
      const listarAll = await FindAllUserUseCase.listarAll();
      res.status(200).json(listarAll);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Deu errado!" });
    }
  }
}
