const getValidatorError = error => {
  if (!error) return null

  const errorMessages = {}

  error.details.map(detail => {
    const message = detail.message
    const key = detail.context.key
    errorMessages[key] = message
  })

  return errorMessages
}

module.exports = { getValidatorError }
