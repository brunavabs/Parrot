import { FindAllUserPostsUseCase } from "./findAllUserPostsUseCase.js";

export class FindAllUserPostsController {
   static async listarAllUsersPost(req, res) {
      try {
         const id = req.params.id;
         const userPosts = await FindAllUserPostsUseCase.findAllUsersPosts(id);
   
         return res.status(200).json(userPosts);
         
      } catch (error) {
         res.status(500).send({message: `Deu erro! Chame o Homem de Ferro - ${error.message}`});
      }
   }
}
