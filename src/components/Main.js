import React from 'react'
import HelloWorld from './HelloWorld'
import MagicBox from './MagicBox'


class Main extends React.Component {

	constructor(props) {
		super(props)
		this.state ={
			score: parseInt(props.score)
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate')
		return parseInt(this.state.score) !== parseInt(nextState.score)
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
		return (
			<MagicBox>
				<p> score: {this.state.score}</p>
				{this.renderScore()}
				{this.props.names.map(name => <HelloWorld key={name} name={name == 'Top' ? name + '-Kim' : name} />)}
				<button onClick={(e) => {this.addScore(50)}}>click me + 50 score</button>
				<button onClick={(e) => {this.addScore(0)}}>click me + 0 score</button>
			</MagicBox>
		)
	}

}

Main.defaultProps = {
	names: [],
	score: 0
}


export default Main