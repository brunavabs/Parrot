import { findAllUserUseCase } from "../useCase/index.js";

export class FindAllUserController {
   constructor() {}

   async listarAll(req, res) {
      try {
         const listarAll = await findAllUserUseCase.listarAll();
         res.status(200).json(listarAll);
      } catch (error) {
         console.log(error);
         res.status(500).send({ message: "Deu errado!" });
      }
   }
}
