import { Posts } from "../../models/index.js";

export class DestroyPostUseCase {
   constructor() {}

   async existePost(data) {
      const id = data.id;
      const count = await Posts.count({ where: { id } });
      return count;
   }

   async matchPostUser(data) {
      const postId = data.params.id;
      const { userType, id } = data.auth;
      const post = await Posts.findByPk(postId);
      return userType == "adm" || post.userID == id;
   }

   async destroy(id) {
      return await Posts.destroy({ where: { id } });
   }
}
