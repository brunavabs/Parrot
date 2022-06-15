import FindAllPostUseCase from './FindAllPostUseCase.js'

export default class FindAllPostController{
   
   static async getAll(req, res){
      try {
         const posts = await FindAllPostUseCase.getAllPosts()
         return res.status(200).json(posts)
      } catch (error) {
         return res.status(500).send({message: `Deu erro! Chame o Homem de Ferro - ${error.message}`})
      }
   }
}