import express from "express";
import userRoutes from "./usersRoutes.js";
import postsRoutes from "./postsRoutes.js";

const routes = express.Router();

routes.get('/', (req, res) => {
   res.status(200).json({msg:'teste rotas'})
})

routes.use(userRoutes);
routes.use(postsRoutes);

export default routes;
