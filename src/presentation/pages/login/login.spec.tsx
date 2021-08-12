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
})
