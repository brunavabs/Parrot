import { FindAllPostController } from "./FindAllPostController.js";
import { FindOnePostController } from "./FindOnePostController.js";
import { CreatePostController } from "./CreatePostController.js";
import { UpdatePostsController } from "./UpdatePostsController.js";
import { DestroyPostController } from "./DestroyPostController.js";

export const findAllPostController = new FindAllPostController();
export const findOnePostController = new FindOnePostController();
export const createPostController = new CreatePostController();
export const updatePostsController = new UpdatePostsController();
export const destroyPostController = new DestroyPostController();
