import React from 'react'
import HelloWorld from './HelloWorld'


class Main extends React.Component {

	renderScore() {
		if(this.props.score > 50) {
			return <p>you pass</p>
		} else {
			return <p>you fail</p>
		}
	}

	render() {
		return (
			<div id="main-container">
				{this.renderScore()}
				{this.props.names.map(name => <HelloWorld name={name == 'Top' ? name + '-Kim' : name} />)}
				<button onClick={(e) => {alert('clicked'); console.log(e.target)}}>click me</button>
			</div>
		)
	}

}

Main.defaultProps = {
	names: [],
	score: 0
}


export default Main