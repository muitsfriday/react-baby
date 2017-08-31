import React, { Component } from 'react'


export default class GoalStatus extends Component {

	render() {
		return (
			<div className="goal">
				<p>{ this.props.statusTxt || 'wait for text' }</p>
			</div>
		)
	}

}
