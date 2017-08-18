import React, { Component } from 'react'
import './App.css'

class App extends Component {

    render () {
        return (
            <div>
								{this.props.children}
                <h1>{this.props.title + ' ' + this.props.test}</h1>
						</div>
        )
    }
}
export default App
