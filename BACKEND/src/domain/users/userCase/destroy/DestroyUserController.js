import { DestroyUserUseCase } from "./DestroyUserUseCase.js";

export class DestroyUserController {
  static async destroyUser(req, res) {
    try {
      const id = req.params.id;
      const authid = req.auth.id;
      const existeUser = await DestroyUserUseCase.existeUser(id);
      if (!existeUser) {
        return res.status(400).json("Usúario não existe! Tente outro!");
      }
      if (!DestroyUserUseCase.matchUser(id, authid)) {
        return res.status(401).json("Você não devia estar aqui, bonitinho");
      }
      await DestroyUserUseCase.destroyUser(id)
      return res.sendStatus(204);
      return res.status(200).json(updateUser);
    } catch (error) {

    }
  }
}
