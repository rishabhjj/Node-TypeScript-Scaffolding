import * as joi from 'joi';

export const profileData = joi.object().keys({
  name: joi.string().required(),
  age: joi.number().required(),
  employeeId: joi.number().required(),
  hobbies: joi.array().items(joi.string().required()).required(),
});
