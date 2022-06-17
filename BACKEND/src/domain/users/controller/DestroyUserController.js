import { destroyUserUseCase } from "../useCase/index.js";

export class DestroyUserController {
   constructor() {}

   async destroyUser(req, res) {
      try {
         const id = req.params.id;
         const authid = req.auth.id;
         const existeUser = await destroyUserUseCase.existeUser(id);
         if (!existeUser) {
            return res.status(400).json("Usúario não existe! Tente outro!");
         }
         if (!destroyUserUseCase.matchUser(id, authid)) {
            return res.status(401).json("Você não devia estar aqui, bonitinho");
         }
         await destroyUserUseCase.destroyUser(id);
         return res.sendStatus(204);
      } catch (error) {
         res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
