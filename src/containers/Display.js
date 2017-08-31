import React from 'react'
import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = state => ({
	count: state.app.counter
})

export default connect(mapStateToProps)(Display)
