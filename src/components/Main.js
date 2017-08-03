import React from 'react'
import HelloWorld from './HelloWorld'


class Main extends React.Component {

	constructor(props){
		super(props)

	}

	renderScore() {
		if(this.props.score > 50) {
			return <p>score is more than 50</p>
		} else {
			return <p>score is less than or equal 50</p>
		}
	}

	render() {
		return (
			<div id="main-container">
				{this.renderScore()}
				{this.props.names.map(name => <HelloWorld name={name.indexOf('Top') >= 0 ? name + ' Kim' : name} />)}
			</div>
		)
	}

}

Main.defaultProps = {
	names: [],
	score: 0
}


export default Main