import FindAllPostUseCase from './FindOnePostUseCase.js'

export default class FindOnePostController{
   
   static async getOne(req, res){
      try {
         const post = await FindAllPostUseCase.getOnePost(req)
         if(!post){
            return res.status(400).json("Não existe postagem para esse ID")   
         }
         return res.status(200).json(post)
      } catch (error) {
         return res.status(500).send({message: `Deu erro! Chame o Homem de Ferro - ${error.message}`})
      }
   }
}