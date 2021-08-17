import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import { Header, Footer, TextInput, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage] = useState<string>('')
  const [fieldValues, setFieldValues] = useState({
    email: '',
    password: ''
  })
  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    setFieldErrors((originalState) => ({
      ...originalState,
      email: validation.validate('email', fieldValues.email)
    }))
  }, [fieldValues.email])

  useEffect(() => {
    setFieldErrors((originalState) => ({
      ...originalState,
      password: validation.validate('password', fieldValues.password)
    }))
  }, [fieldValues.password])

  const verifyErrors = (): boolean => !!Object.keys(fieldErrors).filter((key) => fieldErrors[key]).length

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (isLoading || verifyErrors()) {
      return
    }
    setIsLoading(true)
    await authentication.auth({ email: fieldValues.email, password: fieldValues.password })
  }

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ isLoading, errorMessage, fieldErrors, fieldValues, setFieldValues }}>
        <form data-testid="login-form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <TextInput type="email" name="email" placeholder="Enter your email" />
          <TextInput type="password" name="password" placeholder="Enter your password" />
          <button data-testid="submitBtn" disabled={verifyErrors()} className={Styles.submit} type="submit">
            Log me in!
          </button>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
