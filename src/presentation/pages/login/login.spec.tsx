import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login Component', () => {
  test('Should render Login', () => {
    render(<Login />)
  })
  test('Should not render FormStatus children at Login component mount', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
  test('Should render submit button disabled by default', () => {
    const { getByTestId } = render(<Login />)
    const submitButton = getByTestId('submitBtn') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
  test('Should render inputs with their initial states', () => {
    const { getByTestId } = render(<Login />)
    const emailStatus = getByTestId('email-status')
    const passwordStatus = getByTestId('password-status')
    expect(emailStatus.title).toBe('Required field')
    expect(emailStatus.textContent).toBe('🔴')
    expect(passwordStatus.title).toBe('Required field')
    expect(passwordStatus.textContent).toBe('🔴')
  })
})
