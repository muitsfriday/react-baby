import React from 'react'
import HelloWorld from './HelloWorld'


class Main extends React.Component {


	render() {
		return (
			<div id="main-container">
				{this.props.names.map(name => <HelloWorld name={name} />)}
			</div>
		)
	}

}

Main.defaultProps = {
	names: []
}


export default Main