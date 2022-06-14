import express from 'express';

const routes = express.Router();

routes.get('/users', (req, res) => {
   res.status(200).json({msg:'teste rotas users'})
})


export default routes;