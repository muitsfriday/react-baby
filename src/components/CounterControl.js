import React, { Component } from 'react'


export default class CounterControl extends Component {

	render() {
		return (
			<div className="control">
				<button onClick={() => this.props.incCounter(1)}>+1</button>
				<button onClick={() => this.props.decCounter(1)}>-1</button>
			</div>
		)
	}

}
