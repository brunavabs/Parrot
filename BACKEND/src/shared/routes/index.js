import express from "express";
import userRoutes from "./usersRoutes.js";
import postsRoutes from "./postsRoutes.js";
import { authController } from "../../domain/auth/controller/index.js";
import loginValidation from "../../domain/auth/authValidation/index.js";
import UserPostsValidation from "../../domain/usersPosts/userPostsValidation/index.js";
import { findAllUserPostsController } from "../../domain/usersPosts/controller/index.js";

const routes = express.Router();

routes.get(
   "/userposts/:id",
   UserPostsValidation.getAll,
   findAllUserPostsController.listarAllUsersPost
);

routes.post("/login", loginValidation.login, authController.login);

routes.use(userRoutes);
routes.use(postsRoutes);

export default routes;
