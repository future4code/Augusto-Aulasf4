import React from 'react'
import Task from '../../components/Task'
import { Provider } from 'react-redux'

import { createStore } from "redux";
import rootReducer from "../../reducers";

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Provider store={store}>
				<Task />
			</Provider>
		)
	}
}