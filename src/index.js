import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker' // ไม่เกี่ยว

import App from './App'
import MagicBox from './components/MagicBox'

import Counter from './components/Counter'
import InputCounter from './components/InputCounter'


// solution 1
class Container extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			counter: 1000
		}
		this.updateCounter = this.updateCounter.bind(this)
		this.setCounter = this.setCounter.bind(this)
	}

	updateCounter(num) {
		this.setState({
			counter: Math.max(this.state.counter + num, 0)
		})
	}

	setCounter(num) {
		this.setState({
			counter: num
		})
	}

	render() {
		return (
		<div>
			<InputCounter counter={this.state.counter} 			
			setCounter={this.setCounter}/>
			<Counter 
			counter={this.state.counter} 
			updateCounter={this.updateCounter} />
		</div>)
	}
}



ReactDOM.render(
<App test={1000} title="hello hello" >
	<Container />
</App>
, document.getElementById('root'))


// ไม่เกี่ยว
registerServiceWorker()
