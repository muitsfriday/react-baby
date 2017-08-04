import React from 'react'

class DekDLink extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.title)
    }

	render() {
		return (<a id="a" className="link" href="https://www.dek-d.com">{this.props.title}</a>)
	}

}

export default DekDLink