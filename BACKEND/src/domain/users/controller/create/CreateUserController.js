import { createUserUseCase } from "../../useCase/index.js";

export class CreateUserController {
   constructor() {}

   async createUser(req, res) {
      try {
         const novoUser = await createUserUseCase.registroUser(req.body);
         if (!novoUser) {
            return res.status(400).json("Esse email já existe! :/");
         }
         res.status(201).json(novoUser);
      } catch (error) {
         res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
