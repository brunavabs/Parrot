import { validate, Joi } from "express-validation";

export default validate({
   headers: Joi.object({
      token: Joi.string().required()
   }),
   params: Joi.object({
      id: Joi.string().required()
   }),
   body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      apartament: Joi.string().required(),
      password: Joi.string().required()
   })
})