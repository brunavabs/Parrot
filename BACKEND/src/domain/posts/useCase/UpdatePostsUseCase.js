import { Posts } from "../../models/index.js";

export class UpdatePostsUseCase {
   constructor() {}

   async postInfo(id) {
      const post = await Posts.findByPk(id);
      return post;
   }

   async matchPostUser(postUserId, tokenId) {
      return postUserId == tokenId;
   }

   async updatePost(id, body) {
      await Posts.update(body, { where: { id } });
      const updatedPost = this.postInfo(id);
      return updatedPost;
   }
}
