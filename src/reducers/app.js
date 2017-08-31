

const initState = {
	counter: 0,
	goal: 10
}

export default (state = initState, action) => {
	switch(action.type) {
		case 'inc_counter' : 
			return {
				...state,
				counter: state.counter + action.payload.number,
			}
		case 'dec_counter' :
			return {
				...state,
				counter: state.counter - action.payload.number,
			}
	}
	return state
}