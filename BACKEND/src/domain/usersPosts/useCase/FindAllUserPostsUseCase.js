import { Posts, Users } from "../../models/index.js";

export class FindAllUserPostsUseCase {
   constructor() {}

   async findAllUsersPosts(userID) {
      const userPosts = await Posts.findAll({
         where: { userID },
         include: [
            {
               model: Users,
               attributes: { exclude: ["password", "flag"] },
            },
         ],
      });
      return userPosts;
   }
}
