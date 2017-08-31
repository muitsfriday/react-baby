import React, { Component } from 'react'
import Display from './components/Display'
import CounterControl from './components/CounterControl'
import GoalStatus from './components/GoalStatus'
import GoalSetter from './components/GoalSetter'

export default class App extends Component {

	render() {
		return (
			<div id="app-container">
				<h1>This is a simple counter app.</h1>

				<GoalStatus />
				<Display />
				<CounterControl />
				<GoalSetter initGoal={10} />
				
			</div>
		)
	}

}
