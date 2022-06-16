import DestroyPostUseCase from "./DestroyPostUseCase.js";

export default class DestroyPostController {
   static async destroyPost(req, res) {
      try {
         const count = await DestroyPostUseCase.existePost(req.params);
         if (!count) {
            console.log('teste')
            return res.status(400).json("Post não existe para esse ID!");
         }
         if(!(await DestroyPostUseCase.matchPostUser(req))){
            return res.status(401).json("Você não tem autoriazação para executar essa ação!")
         }
         await DestroyPostUseCase.destroy(req.params.id);
         return res.sendStatus(204);
      } catch (error) {
         return res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
