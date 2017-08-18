import React from 'react'


export default (props) => {
	return <input type="text" value={props.counter} 
	onChange={(e) => ( props.setCounter( parseInt(e.target.value) ) )} />
}