import React from 'react'
import HelloWorld from './HelloWorld'


class Main extends React.Component {

	constructor(props) {
		super(props)
		this.state ={
			score: parseInt(props.score)
		}
	}

	addScore() {
		this.setState({
			score: parseInt(this.state.score) + 50
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
			<div id="main-container">
				<p> score: {this.state.score}</p>
				{this.renderScore()}
				{this.props.names.map(name => <HelloWorld name={name == 'Top' ? name + '-Kim' : name} />)}
				<button onClick={(e) => {this.addScore()}}>click me</button>
			</div>
		)
	}

}

Main.defaultProps = {
	names: [],
	score: 0
}


export default Main