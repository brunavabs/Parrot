import { updateUserUseCase } from "../../useCase/index.js";

export class UpdateUserController {
   constructor() {}

   async updateUser(req, res) {
      try {
         const id = req.params.id;
         const authid = req.auth.id;
         const existeUser = await updateUserUseCase.existeUser(id);
         if (!existeUser) {
            return res.status(400).json("Usúario não existe! Tente outro!");
         }
         if (!updateUserUseCase.matchUser(id, authid)) {
            return res.status(401).json("Você não devia estar aqui, bonitinho");
         }
         const updateUser = await updateUserUseCase.updateUser(id, req.body);
         return res.status(200).json(updateUser);
      } catch (error) {
         res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
