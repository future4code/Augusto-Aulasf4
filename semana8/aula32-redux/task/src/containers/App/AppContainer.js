import React from 'react'
import Task from '../../components/Task'
import { Provider } from 'react-redux'
import AppBarComponent from '../AppBar/AppBar'
import rootReducer from '../../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)
export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Provider store={store}>
				<AppBarComponent />
				<Task />
			</Provider>
		)
	}
}
