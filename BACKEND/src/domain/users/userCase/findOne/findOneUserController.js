import { FindOneUserUseCase } from "./findOneUserUseCase.js";

export class FindOneUserController {
  static async listarOne(req, res) {
    try {
      const listarOne = await FindOneUserUseCase.listarOne(req);
      res.status(200).json(listarOne);
    } catch (error) {
      console.log(error);
      res.status(500).send({
          message: "Sinto muito! Ache o erro e tente de novo mais tarde",
        });
    }
  }
}
