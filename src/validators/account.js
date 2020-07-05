const Joi = require("@hapi/joi")
const { getValidatorError } = require("../helpers/validator")
const accountSignUp = (req, res, next) => {
  const { email, password, password_confirmation } = req.body

  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .max(30)
      .required(),
    password_confirmation: Joi.string()
      .valid(Joi.ref("password"))
      .required()
  })

  const { error } = schema.validate(
    { email, password, password_confirmation },
    { abortEarly: false }
  )

  if (error)
    return res.jsonBadRequest(null, null, { error: getValidatorError(error) })

  next()
}

module.exports = { accountSignUp }
