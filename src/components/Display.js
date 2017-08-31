import React, { Component } from 'react'


export default class Display extends Component {

	render() {
		return (
			<p>
			counter: <span>{this.props.count || 0}</span>
			</p>
		)
	}

}
