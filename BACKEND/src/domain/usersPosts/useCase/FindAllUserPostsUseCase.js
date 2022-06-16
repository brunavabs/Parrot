import { Posts } from "../../models/index.js";

export class FindAllUserPostsUseCase {
   static async findAllUsersPosts(userID) {
      const userPosts = await Posts.findAll({ where: { userID } });
      return userPosts;
   }
}
