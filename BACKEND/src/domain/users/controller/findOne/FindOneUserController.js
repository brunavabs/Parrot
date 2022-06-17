import { findOneUserUseCase } from "../../useCase/index.js";

export class FindOneUserController {
   constructor() {}

   async listarOne(req, res) {
      try {
         const listarOne = await findOneUserUseCase.listarOne(req);
         if (!listarOne) {
            res.json(400).json("Não existe usuário para esse ID");
         }
         res.status(200).json(listarOne);
      } catch (error) {
         console.log(error);
         return res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
