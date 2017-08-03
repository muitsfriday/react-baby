import React from 'react'
import ReactDom from 'react-dom'
import Main from './components/Main'


ReactDom.render(<Main names={['Bell', 'Ann', 'Top', 'Tim']} score="0" />, document.getElementById('app'));

