import { Posts } from "../../../models/index.js";

export default class FindOnePostUseCase {
   static async getOnePost(data) {
      const posts = await Posts.findByPk(data.params.id);
      return posts;
   }
}
