import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Header from '@/presentation/components/header'
import Footer from '@/presentation/components/footer'
import TextInput from '@/presentation/components/text-input'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <TextInput type="email" name="email" placeholder="Enter your email" />
        <TextInput type="password" name="password" placeholder="Enter your password" />
        <button className={Styles.submit} type="submit">Log me in!</button>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
