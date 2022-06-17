import { findOneUserUseCase } from "../useCase/index.js";

export class FindOneUserController {
  constructor() {}

  async listarOne(req, res) {
    try {
      const listarOne = await findOneUserUseCase.listarOne(req);
      res.status(200).json(listarOne);
    } catch (error) {
      console.log(error);
      res.status(500).send({
          message: "Sinto muito! Ache o erro e tente de novo mais tarde",
        });
    }
  }
}
