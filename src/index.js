import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker' // ไม่เกี่ยว

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers/'

import App from './App'



const store = createStore(
	rootReducers, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>	
, document.getElementById('root'))


// ไม่เกี่ยว
registerServiceWorker()



/*
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;*/
