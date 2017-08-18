import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker' // ไม่เกี่ยว

import App from './App'
import MagicBox from './components/MagicBox'

import Counter from './components/Counter'

ReactDOM.render(
<App test={1000} title="hello hello" >
	<Counter />
</App>
, document.getElementById('root'))


// ไม่เกี่ยว
registerServiceWorker()
