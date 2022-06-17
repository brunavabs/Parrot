import { FindAllUserUseCase } from "./FindAllUserUseCase.js";
import { FindOneUserUseCase } from "./FindOneUserUseCase.js";
import { CreateUserUseCase } from "./CreateUserUseCase.js";
import { UpdateUserUseCase } from "./UpdateUserUseCase.js";
import { DestroyUserUseCase } from "./DestroyUserUseCase.js";

export const findAllUserUseCase = new FindAllUserUseCase();
export const findOneUserUseCase = new FindOneUserUseCase();
export const createUserUseCase = new CreateUserUseCase();
export const updateUserUseCase = new UpdateUserUseCase();
export const destroyUserUseCase = new DestroyUserUseCase();
