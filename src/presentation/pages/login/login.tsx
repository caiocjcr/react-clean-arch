import React from 'react'
import Styles from './login-styles.scss'
import { Header, Footer, TextInput, FormStatus } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <TextInput type="email" name="email" placeholder="Enter your email" />
        <TextInput type="password" name="password" placeholder="Enter your password" />
        <button className={Styles.submit} type="submit">Log me in!</button>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
