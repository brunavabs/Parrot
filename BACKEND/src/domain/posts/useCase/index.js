import { FindAllPostUseCase } from "./FindAllPostUseCase.js";
import { FindOnePostUseCase } from "./FindOnePostUseCase.js";
import { CreatePostUseCase } from "./CreatePostUseCase.js";
import { UpdatePostsUseCase } from "./UpdatePostsUseCase.js";
import { DestroyPostUseCase } from "./DestroyPostUseCase.js";

export const findAllPostUseCase = new FindAllPostUseCase();
export const findOnePostUseCase = new FindOnePostUseCase();
export const createPostUseCase = new CreatePostUseCase();
export const updatePostsUseCase = new UpdatePostsUseCase();
export const destroyPostUseCase = new DestroyPostUseCase();

