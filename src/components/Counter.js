import React from 'react'


class Counter extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			counter: 0
		}
	}

	shouldComponentUpdate(_, prevState) {
		//return this.state.counter !== prev.counter
		return prevState.counter !== this.state.counter
	}

	updateCounter(num) {
		this.setState({
			counter: Math.max(this.state.counter + num, 0)
		})
	}

	render() {
		console.log('render')
		return (
		<div id="counter-container">
			<p> counter: {this.state.counter} </p>
			<button onClick={ () => this.updateCounter(1) }> + 1 </button>
			<button onClick={ () => this.updateCounter(-1) }> - 1 </button>
			<button onClick={ () => this.updateCounter(10) }> + 10 </button>
			<button onClick={ () => this.updateCounter(-10) }> - 10 </button>
		</div>)
	}

}

export default Counter