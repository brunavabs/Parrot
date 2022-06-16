import express from "express";
import { CreateUserController } from "../domain/users/userCase/create/CreateUserController.js";
import { FindAllUserController } from "../domain/users/userCase/findAll/FindAllUserController.js";
import { FindOneUserController } from "../domain/users/userCase/findOne/FindOneUserController.js";
import { UpdateUserController} from "../domain/users/userCase/update/UpdateUserController.js"
import UserValidation from "../domain/users/usersValidation/index.js";
import auth from "../shared/middleware/auth.js"

const routes = express.Router();

routes.post("/users", UserValidation.create, CreateUserController.createUser);

routes.get("/users", FindAllUserController.listarAll);
routes.get("/users/:id", FindOneUserController.listarOne);

routes.put("/users/:id", auth, UserValidation.update, UpdateUserController.updateUser);
export default routes;
