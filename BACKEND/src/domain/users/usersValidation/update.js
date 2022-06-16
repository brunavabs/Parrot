import { validate, Joi } from "express-validation";

export default validate({
  
   params: Joi.object({
      id: Joi.number().required()
   }),
   body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      apartament: Joi.number().required(),
      password: Joi.string().required()
   })
})