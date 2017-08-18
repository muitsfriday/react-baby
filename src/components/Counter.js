import React from 'react'


class Counter extends React.Component {

	
	constructor(props) {
		super(props)

		console.log(this.props, props)
	}

	/*
	shouldComponentUpdate(_, nextState) {
		//return this.state.counter !== prev.counter
		//console.log(nextState, this.state)
		return nextState.counter !== this.state.counter
	}*/

	/*
	updateCounter(num) {
		this.setState({
			counter: Math.max(this.state.counter + num, 0)
		})
	}*/

	render() {
		return (
		<div id="counter-container">
			<p> counter: {this.props.counter} </p>
			<button onClick={ () => {
				console.log(this.props)
				this.props.updateCounter(1) 
				}}> + 1 </button>
			<button onClick={ () => this.props.updateCounter(-1) }> - 1 </button>
			<button onClick={ () => this.props.updateCounter(10) }> + 10 </button>
			<button onClick={ () => this.props.updateCounter(-10) }> - 10 </button>
		</div>)
	}

}

export default Counter