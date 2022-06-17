import { findAllPostUseCase } from "../../useCase/index.js";

export class FindAllPostController {
   async getAll(req, res) {
      try {
         const posts = await findAllPostUseCase.getAllPosts();
         return res.status(200).json(posts);
      } catch (error) {
         return res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
