import Joi from 'joi';

export const bookSchema = Joi.object({
  name: Joi.string().required().min(5).max(255),
  // rating: Joi.number().min(1).max(10)
});
