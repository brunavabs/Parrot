import { validate, Joi } from "express-validation";

export default validate({
   body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      apartament: Joi.number().required(),
      password: Joi.string().required(),
   }),
});
