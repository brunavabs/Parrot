import { Posts, Users } from "../../../models/index.js";

export default class FindOnePostUseCase {
   static async getOnePost(data) {
      const posts = await Posts.findOne({
         where: { id: data.params.id },
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
