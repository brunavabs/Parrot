import express from "express";
import auth from "../../shared/middleware/auth.js";
import postValidation from "../../domain/posts/postValidation/index.js";
import {
   createPostController,
   destroyPostController,
   findAllPostController,
   findOnePostController,
   updatePostsController,
} from "../../domain/posts/controller/index.js";

const routes = express.Router();

routes.get("/posts", findAllPostController.getAll);

routes.get("/posts/:id", postValidation.getOne, findOnePostController.getOne);

routes.post(
   "/posts",
   auth,
   postValidation.create,
   createPostController.createPost
);

routes.put(
   "/posts/:id",
   auth,
   postValidation.update,
   updatePostsController.updatePost
);

routes.delete(
   "/posts/:id",
   auth,
   postValidation.destroy,
   destroyPostController.destroyPost
);

export default routes;
