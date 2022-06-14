import express from 'express';

const routes = express.Router();

routes.get('/posts', (req, res) => {
   res.status(200).json({msg:'teste rotas posts'})
})


export default routes;