import { Posts } from "../../../models/index.js";

export default class CreatePostUseCase {
   static async registerPost(data) {
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
