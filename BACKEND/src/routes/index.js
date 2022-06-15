import express from "express";
import userRoutes from "./usersRoutes.js";
import postsRoutes from "./postsRoutes.js";
import { AuthController } from "../domain/auth/authUseCase/authContoller.js";
import loginValidation from "../domain/auth/authValidation/index.js";

const routes = express.Router();

routes.post("/login", loginValidation.login, AuthController.login);

routes.use(userRoutes);
routes.use(postsRoutes);

export default routes;
