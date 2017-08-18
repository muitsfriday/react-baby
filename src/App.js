import React, { Component } from 'react'
import './App.css'

class App extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.title + ' ' + this.props.test}</h1>
				{this.props.children}
            </div>
        )
    }
}

export default App
