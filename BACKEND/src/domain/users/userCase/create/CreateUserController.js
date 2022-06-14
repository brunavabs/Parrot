import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  static async createUser(req, res) {
    try {
      const novoUser = await CreateUserUseCase.registroUser(req.body);
      res.status(201).json(novoUser);
    } catch (error) {
      res.status(500).json("Deu erro! Chame o Homem de Ferro");
    }
  }
}
