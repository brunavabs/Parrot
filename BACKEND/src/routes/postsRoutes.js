import express from "express";
import auth from "../shared/middleware/auth.js";
import postValidation from "../domain/posts/postValidation/index.js";
import CreatePostController from "../domain/posts/postUseCase/create/CreatePostController.js";
import FindAllPostController from "../domain/posts/postUseCase/findAll/FindAllPostController.js";
import FindOnePostController from "../domain/posts/postUseCase/findOne/FindOnePostController.js";
import DestroyPostController from "../domain/posts/postUseCase/destroy/DestroyPostController.js";
import UpdatePostsController from "../domain/posts/postUseCase/update/UpdatePostsController.js";

const routes = express.Router();

routes.get("/posts", FindAllPostController.getAll);

routes.get("/posts/:id", postValidation.getOne, FindOnePostController.getOne);

routes.post(
   "/posts",
   auth,
   postValidation.create,
   CreatePostController.createPost
);

routes.put(
   "/posts/:id",
   auth,
   postValidation.update,
   UpdatePostsController.updatePost
);

routes.delete(
   "/posts/:id",
   auth,
   postValidation.destroy,
   DestroyPostController.destroyPost
);

export default routes;
