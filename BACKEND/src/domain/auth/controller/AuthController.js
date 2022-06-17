import { authUseCase } from "../useCase/index.js";

export class AuthController {
   async login(req, res) {
      try {
         const token = await authUseCase.token(req.body);
         if (token === "Email não cadastrado!" || token === "Senha invalida!") {
            return res.status(400).json({ token });
         }
         return res.status(200).json(token);
      } catch (error) {
         res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
