import React from 'react'
import HelloWorld from './HelloWorld'


class Main extends React.Component {


	render() {
		return (
			<div id="main-container">
				<HelloWorld />
				<HelloWorld name="Ann" />
				<HelloWorld name="Bell" />
			</div>
		)
	}

}


export default Main