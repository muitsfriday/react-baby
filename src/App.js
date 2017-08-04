import React, { Component } from 'react'
import './App.css'

class App extends Component {

    constructor(props) {
        super(props)

    }

    render () {
        return (
          <h1>{this.props.title}</h1>
        )
    }
}
export default App
