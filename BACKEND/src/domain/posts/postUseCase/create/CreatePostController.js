import CreatePostUseCase from "./CreatePostUseCase.js";

export default class CreatePostController {
   static async createPost(req, res) {
      try {
         const post = await CreatePostUseCase.registerPost(req);
         res.status(201).json(post);
         
      } catch (error) {
         res.status(500).json(error)
      }
   }
}
