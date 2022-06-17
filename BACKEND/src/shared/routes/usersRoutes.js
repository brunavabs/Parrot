import express from "express";
import {
   createUserController,
   destroyUserController,
   findAllUserController,
   findOneUserController,
   updateUserController,
} from "../../domain/users/controller/index.js";
import userValidation from "../../domain/users/usersValidation/index.js";
import auth from "../middleware/auth.js";

const routes = express.Router();

routes.post("/users", userValidation.create, createUserController.createUser);

routes.get("/users", findAllUserController.listarAll);
routes.get("/users/:id", findOneUserController.listarOne);

routes.put(
   "/users/:id",
   auth,
   userValidation.update,
   updateUserController.updateUser
);

routes.delete(
   "/users/:id",
   auth,
   userValidation.destroy,
   destroyUserController.destroyUser
);
export default routes;
