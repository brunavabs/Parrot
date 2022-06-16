import { UpdateUserUseCase } from "./UpdateUserUseCase.js";

export class UpdateUserController {
  static async updateUser(req, res) {
    try {
      const id = req.params.id;
      const authid = req.auth.id;
      const existeUser = await UpdateUserUseCase.existeUser(id);
      if (!existeUser) {
        return res.status(400).json("Usúario não existe! Tente outro!");
      }
      if (!UpdateUserUseCase.matchUser(id, authid)) {
        return res.status(401).json("Você não devia estar aqui, bonitinho");
      }
      const updateUser = await UpdateUserUseCase.updateUser(id, req.body);
      return res.status(200).json(updateUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Sinto muito! Ache o erro e tente de novo mais tarde",
      });
    }
  }
}
