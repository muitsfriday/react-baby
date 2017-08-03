import React from 'react'

class HelloWorld extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (<h1>Hello World name: {this.props.name}</h1>)
	}

}

HelloWorld.defaultProps = {
	name: 'not provided'
}

export default HelloWorld