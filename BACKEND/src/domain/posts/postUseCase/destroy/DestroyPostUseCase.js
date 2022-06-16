import { Posts } from "../../../models/index.js";

export default class DestroyPostUseCase {
   static async existePost(data) {
      const id = data.id;
      const count = await Posts.count({ where: { id } });
      return count;
   }

   static async matchPostUser(data) {
      const postId = data.params.id;
      const { userType, id } = data.auth;
      const post = await Posts.findByPk(postId);
      return userType == "adm" || post.userID == id;
   }

   static async destroy(id) {
      return await Posts.destroy({ where: { id } });
   }
}
