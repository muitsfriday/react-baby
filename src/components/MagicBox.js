import React from 'react'
import NameItem from './NameItem'


class MagicBox extends React.Component {
    
    render() {
        return (
        <div>
            {this.props.names.map((value, index) => (
                <NameItem key={index} name={value} />
            ))}
        </div>)
    }

}

export default MagicBox