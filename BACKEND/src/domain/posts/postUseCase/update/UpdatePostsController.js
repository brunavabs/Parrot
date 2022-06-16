import UpdatePostsUseCase from "./UpdatePostsUseCase.js";

export default class UpdatePostsController {
   static async updatePost(req, res) {
      try {
         const id = req.params.id;
         const tokenId = req.auth.id;
         const post = await UpdatePostsUseCase.postInfo(id);
         if (!post) {
            return res.status(400).json("Post não existe para esse ID");
         }

         const match = await UpdatePostsUseCase.matchPostUser(post.id, tokenId);
         if (!match) {
            return res
               .status(401)
               .json("Você não tem autorização para realizar essa ação!");
         }

         const updatedPost = await UpdatePostsUseCase.updatePost(id, req.body);
         res.status(200).json(updatedPost);
      } catch (error) {
         return res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
