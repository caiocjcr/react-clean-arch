import { MinLengthValidation } from './min-length-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (minLength: number, fieldName = faker.database.column()): MinLengthValidation =>
  new MinLengthValidation(fieldName, minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const fieldName = 'field'
    const sut = makeSut(5, fieldName)
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
