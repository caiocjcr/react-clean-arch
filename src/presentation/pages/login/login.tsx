import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import { Header, Footer, TextInput, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [isLoading] = useState<boolean>(false)
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

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ isLoading, errorMessage, fieldErrors, fieldValues, setFieldValues }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <TextInput type="email" name="email" placeholder="Enter your email" />
          <TextInput type="password" name="password" placeholder="Enter your password" />
          <button data-testid="submitBtn" disabled className={Styles.submit} type="submit">
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
