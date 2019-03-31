import React, { useState } from 'react'

import { push as Menu } from 'react-burger-menu'
import { hot } from 'react-hot-loader/root'

import styles from '../styles'

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenuStateChange = state => {
    setMenuIsOpen(state.isOpen)
  }

  const handleMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div id="outer-container">
      <div id="menu-wrap">
        <Menu
          styles={styles}
          id="push"
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          isOpen={menuIsOpen}
          onStateChange={handleMenuStateChange}
        >
          <div>
            <h1>Sidebar</h1>
            <p>One</p>
            <p>Two</p>
            <p>Three</p>
          </div>
        </Menu>
      </div>

      <main id="page-wrap">
        <button
          type="button"
          onClick={handleMenuButtonClick}
          className="btn btn-info btn-lg bg-inverse"
        >
          Toggle Menu
        </button>

        <h1>Navigation bar</h1>

        <h1>Page Content</h1>
        <p>Hello world!</p>
      </main>
    </div>
  )
}

export default hot(App)
