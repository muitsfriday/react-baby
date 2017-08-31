import React from 'react'
import { connect } from 'react-redux'
import CounterControl from '../components/CounterControl'
import { incCounter, decCounter } from '../actions/counter'

export default connect(null, { 
	incCounter, 
	decCounter 
})(CounterControl)


