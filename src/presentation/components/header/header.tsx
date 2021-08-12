import React, { memo } from 'react'
import Styles from './header-styles.scss'

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <h1>React, TDD, CA, SOLID</h1>
    </header>
  )
}

export default memo(Header)
