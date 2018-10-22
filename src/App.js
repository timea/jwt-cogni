import React from 'react'
import { StatusBar, AsyncStorage } from 'react-native'

import { connect } from 'react-redux'

import Tabs from './auth/Tabs'
import Nav from './nav/Nav'
import deviceStorage from './services/deviceStorage'

class App extends React.Component {

  render() {
    if (this.props.auth.loggedIn) {
      return (
        <Nav />
      )
    }
    return (
      <Tabs />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
