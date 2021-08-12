import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '@/presentation/styles/global.scss'
import { LoginPage } from '@/presentation/pages'

const Index: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default Index
