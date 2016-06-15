import React, {Component} from 'react'
import {render} from 'react-dom'
import Cookies from 'cookies-js'

require('./index.css')

class App extends Component {
  constructor() {
    super()
    this.dir = Cookies.get('dir') ? Cookies.get('dir') : 'ltr'
  }

  switch = () => {
    Cookies.set('dir', this.dir === 'rtl' ? 'ltr' : 'rtl')
    location.href = location.href
  }

  render() {
    return (
      <div>
        <h1>Webpack RTL Example</h1>
        <h2>Current direction: {this.dir}</h2>
        <button onClick={this.switch}>Switch direction</button>
        <div className="clear"/>
        <div className="float">
          I float right if we are ltr, and left if we are rtl
        </div>
      </div>
    )
  }
}

render(<App/>, document.querySelector('#root'))
