import express from 'express';
import { CreateUserController } from '../domain/users/userCase/create/CreateUserController';

const routes = express.Router();

routes.get('/users', (req, res) => {
   res.status(200).json({msg:'teste rotas users'})
})

routes.post('/users', CreateUserController.createUser)


export default routes;