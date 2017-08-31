


const incCounter = (number) => ({
	type: 'inc_counter',
	payload: {
		number
	}
})

const decCounter = (number) => ({
	type: 'dec_counter',
	payload: {
		number
	}
})

export {
	incCounter,
	decCounter
}