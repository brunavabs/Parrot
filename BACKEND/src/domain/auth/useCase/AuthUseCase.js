import { Users } from "../../models/index.js";
import { isPasswordMatch } from "../../../shared/utils/password/password.js";
import jwt from "jsonwebtoken";
import secret from "../../../config/secret.js";

export class AuthUseCase {
   constructor() {}

   async token(data) {
      try {
         const { email, password } = data;

         const user = await Users.findOne({ where: { email } });
         if (!user) {
            return "Email não cadastrado!";
         }

         if (!isPasswordMatch(password, user.password)) {
            return "Senha invalida!";
         }

         const token = jwt.sign(
            {
               id: user.id,
               name: user.name,
               email: user.email,
               userType: user.flag == 0 ? "user" : "adm",
            },
            secret.key
         );

         return token;
      } catch (error) {
         res.status(500).send({
            message: `Deu erro! Chame o Homem de Ferro - ${error.message}`,
         });
      }
   }
}
