import { ValidationError } from "express-validation";

export default (error, req, res, next) => {
   if (error instanceof ValidationError) {
      return res
         .status(400)
         .json({
            message: `Preencha corretamente todos os campos! - ${error.message}`,
         });
   }

   if (error.name == "UnauthorizedError") {
      return res.status(401).json({
         message: "E-mail ou senha inválido, verifique e tente novamente",
      });
   }

   return res
      .status(500)
      .json({ message: `${message.error} - Erro interno do servidor!` });
};
