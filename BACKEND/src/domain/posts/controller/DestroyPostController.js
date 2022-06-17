import { destroyPostUseCase } from "../useCase/index.js";

export class DestroyPostController {
   async destroyPost(req, res) {
      try {
         const count = await destroyPostUseCase.existePost(req.params);
         if (!count) {
            console.log("teste");
            return res.status(400).json("Post não existe para esse ID!");
         }
         if (!(await destroyPostUseCase.matchPostUser(req))) {
            return res
               .status(401)
               .json("Você não tem autoriazação para executar essa ação!");
         }
         await destroyPostUseCase.destroy(req.params.id);
         return res.sendStatus(204);
      } catch (error) {
         return res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
