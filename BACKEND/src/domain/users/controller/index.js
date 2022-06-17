import { FindAllUserController } from "./findAll/FindAllUserController.js";
import { FindOneUserController } from "./findOne/FindOneUserController.js";
import { CreateUserController } from "./create/CreateUserController.js";
import { UpdateUserController } from "./update/UpdateUserController.js";
import { DestroyUserController } from "./destroy/DestroyUserController.js";

export const findAllUserController = new FindAllUserController();
export const findOneUserController = new FindOneUserController();
export const createUserController = new CreateUserController();
export const updateUserController = new UpdateUserController();
export const destroyUserController = new DestroyUserController();
