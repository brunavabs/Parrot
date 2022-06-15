import express from "express";
import { CreateUserController } from "../domain/users/userCase/create/CreateUserController.js";
import { FindAllUserController } from "../domain/users/userCase/findAll/findAllUserController.js";
import { FindOneUserController } from "../domain/users/userCase/findOne/findOneUserController.js";
import UserValidation from "../domain/users/usersValidation/index.js";

const routes = express.Router();

routes.post("/users", UserValidation.create, CreateUserController.createUser);

routes.get("/users", FindAllUserController.listarAll);
routes.get("/users/:id", FindOneUserController.listarOne);
export default routes;
