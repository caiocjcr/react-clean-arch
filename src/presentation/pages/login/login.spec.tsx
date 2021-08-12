import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import Login from './login'
import { Validation } from '@/presentation/protocols/validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  errorMessage: string
  fieldName: string
  fieldValue: string

  validate (fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)
  return { sut, validationSpy }
}

describe('Login Component', () => {
  test('Should render Login', () => {
    const { validationSpy } = makeSut()
    render(<Login validation={validationSpy} />)
  })
  test('Should not render FormStatus children at Login component mount', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
  test('Should render submit button disabled by default', () => {
    const { sut } = makeSut()
    const submitButton = sut.getByTestId('submitBtn') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
  test('Should render inputs with their initial states', () => {
    const { sut } = makeSut()
    const emailStatus = sut.getByTestId('email-status')
    const passwordStatus = sut.getByTestId('password-status')
    expect(emailStatus.title).toBe('Required field')
    expect(emailStatus.textContent).toBe('🔴')
    expect(passwordStatus.title).toBe('Required field')
    expect(passwordStatus.textContent).toBe('🔴')
  })
  test('Should call Validation with correct email', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: 'any_email' } })
    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe('any_email')
  })
  test('Should call Validation with correct password', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: 'any_password' } })
    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe('any_password')
  })
})
