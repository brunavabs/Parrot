import { validate, Joi } from "express-validation";

export default validate({
   headers: Joi.object({
      token: Joi.string().required(),
   }),
   params: Joi.object({
      id: Joi.string().required(),
   }),
});
