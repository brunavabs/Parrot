import { validate, Joi } from "express-validation";

export default validate({
   // headers: Joi.object({
   //    ['Authorization: Bearer']: Joi.string().token().required(),
   // }),
   body: Joi.object({
      content: Joi.string().required(),
   }),
});
