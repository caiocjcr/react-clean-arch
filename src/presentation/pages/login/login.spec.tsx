import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Login from './login'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login />)
  return { sut }
}

describe('Login Component', () => {
  test('Should render Login', () => {
    render(<Login />)
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
})
