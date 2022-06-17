import { FindAllUserController } from "./FindAllUserController.js";
import { FindOneUserController } from "./FindOneUserController.js";
import { CreateUserController } from "./CreateUserController.js";
import { UpdateUserController } from "./UpdateUserController.js";
import { DestroyUserController } from "./DestroyUserController.js";

export const findAllUserController = new FindAllUserController();
export const findOneUserController = new FindOneUserController();
export const createUserController = new CreateUserController();
export const updateUserController = new UpdateUserController();
export const destroyUserController = new DestroyUserController();
