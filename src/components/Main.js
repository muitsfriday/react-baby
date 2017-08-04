import React from 'react'
import HelloWorld from './HelloWorld'


class Main extends React.Component {

	constructor(props) {
		console.log('constructor')
		super(props)
		this.state ={
			score: parseInt(props.score)
		}
	}

	componentWillMount() {
		console.log('componentWillMount')
	}

	componentDidMount() {
		console.log('componentDidMount')
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate')
		return parseInt(this.state.score) !== parseInt(nextState.score)
	}

	componentWillUpdate() {
		console.log('componentWillUpdate')
	}


	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	addScore(score) {
		this.setState({
			score: parseInt(this.state.score) + score
		})
	}

	renderScore() {
		if(parseInt(this.state.score) > 50) {
			return <p>you pass</p>
		} else {
			return <p>you fail</p>
		}
	}

	render() {
		console.log('render')
		return (
			<div id="main-container">
				<p> score: {this.state.score}</p>
				{this.renderScore()}
				{this.props.names.map(name => <HelloWorld key={name} name={name == 'Top' ? name + '-Kim' : name} />)}
				<button onClick={(e) => {this.addScore(50)}}>click me + 50 score</button>
				<button onClick={(e) => {this.addScore(0)}}>click me + 0 score</button>
			</div>
		)
	}

}

Main.defaultProps = {
	names: [],
	score: 0
}


export default Main