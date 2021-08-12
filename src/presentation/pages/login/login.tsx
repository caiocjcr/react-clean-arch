import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Header, Footer, TextInput, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [isLoading] = useState<boolean>(false)
  const [errorMessage] = useState<string>('')
  const [fieldErrors] = useState({
    email: 'Required field',
    password: 'Required field'
  })

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ isLoading, errorMessage, fieldErrors }}>
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
