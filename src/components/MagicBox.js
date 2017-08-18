import React from 'react'
import NameItem from './NameItem'


class MagicBox extends React.Component {

	constructor(props) {
		console.log('construct')
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			counter: props.counter || 0
		}
	}

	componentWillMount() {
		console.log('componentWillMount')
		
	}
	componentDidMount() { // (kim top) tim
		console.log('componentDidMount')
	}
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate',  this.state)
	}
	componentWillUpdate() {
		console.log('componentWillUpdate')
	}
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	handleClick(e) {
		//console.log(e.target, this)
		this.setState({
			counter: this.state.counter + 1
		})
		//console.log(this.state)
	}
	
	render() {
		console.log('render')
		return (
		<div>
				{ this.state.counter }
				{ this.props.names.map((value, index) => (
						<NameItem key={index} name={value} />
				)) }
				<button onClick={this.handleClick} >
						Click me + 1
				</button>
		</div>)
	}

}

export default MagicBox