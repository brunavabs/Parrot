import { Posts } from "../../models/index.js";

export class CreatePostUseCase {
   constructor() {}
   
   async registerPost(data) {
      try {
         const userID = data.auth.id;
         const { content } = data.body;

         const post = await Posts.create({
            content,
            userID,
         });
         return post;
      } catch (error) {
         return error;
      }
   }
}
