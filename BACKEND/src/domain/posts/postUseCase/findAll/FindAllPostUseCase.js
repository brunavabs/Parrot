import { Posts } from "../../../models/index.js";

export default class FindAllPostUseCase {
   static async getAllPosts() {
      const posts = await Posts.findAll();
      return posts;
   }
}
