import { validate, Joi } from "express-validation";

export default validate({
   body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      apartament: Joi.string().required(),
      password: Joi.string().required(),
   }),
});
