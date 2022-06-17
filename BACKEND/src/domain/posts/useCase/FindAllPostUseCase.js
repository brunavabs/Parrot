import { Posts, Users } from "../../models/index.js";

export class FindAllPostUseCase {
   constructor() {}

   async getAllPosts() {
      const posts = await Posts.findAll({
         include: [
            {
               model: Users,
               attributes: { exclude: ["password", "flag"] },
            },
         ],
      });
      return posts;
   }
}
