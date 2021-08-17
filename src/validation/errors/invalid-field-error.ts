export class InvalidFieldError extends Error {
  constructor (fieldName: string) {
    super(`Field '${fieldName}' is not valid`)
  }
}
