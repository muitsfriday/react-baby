import React, { Component } from 'react'


export default class GoalSetter extends Component {

	render() {
		return (
			<div className="goal-setter">
				<label>Set goal: </label><input type="number" value={this.props.goal || this.props.initGoal || 0} />
			</div>
		)
	}

}
