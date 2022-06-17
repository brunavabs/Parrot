import { createPostUseCase } from "../../useCase/index.js";

export class CreatePostController {
   async createPost(req, res) {
      try {
         const post = await createPostUseCase.registerPost(req);
         res.status(201).json(post);
      } catch (error) {
         res.status(500).json(error);
      }
   }
}
