import React from 'react'

class NameItem extends React.Component {

    renderName(name) {
        if(name === 'top') {
            return name + ' <3 kim' 
        }
        return name
    }

    render() {
        let name = this.props.name || '-'
        return (<p>{ this.renderName(name) }</p>)
    }

}

export default NameItem