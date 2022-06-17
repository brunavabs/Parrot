import { FindAllPostController } from "./findAll/FindAllPostController.js";
import { FindOnePostController } from "./findOne/FindOnePostController.js";
import { CreatePostController } from "./create/CreatePostController.js";
import { UpdatePostsController } from "./update/UpdatePostsController.js";
import { DestroyPostController } from "./destroy/DestroyPostController.js";

export const findAllPostController = new FindAllPostController();
export const findOnePostController = new FindOnePostController();
export const createPostController = new CreatePostController();
export const updatePostsController = new UpdatePostsController();
export const destroyPostController = new DestroyPostController();
