import React from 'react'

class MagicBox extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="magicbox">
				<h2> Magicbox Header </h2>
				{this.props.children}
				<p> Magicbox Footer </p>
			</div>
		)
	}

}



export default MagicBox