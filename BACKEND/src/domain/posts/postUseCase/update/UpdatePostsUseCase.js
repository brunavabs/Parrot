import { Posts } from "../../../models/index.js";

export default class UpdatePostsUseCase {
   static async postInfo(id) {
      const post = await Posts.findByPk(id);
      return post;
   }

   static async matchPostUser(postUserId, tokenId) {
      return postUserId == tokenId;
   }

   static async updatePost(id, body) {
      await Posts.update(body, { where: { id } });
      const updatedPost = this.postInfo(id);
      return updatedPost;
   }
}
