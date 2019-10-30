import React from 'react'
import Task from '../../components/Task'
import { Provider } from 'react-redux'
import AppBarComponent from '../AppBar/AppBar'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../../reducers";
import { createStore, applyMiddleware, compose } from 'redux';
import otherMiddleware from 'other-middleware';
import thunk from 'redux-thunk';


const middleware = [
    thunk,
];

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

	export default (initialState) => {
		const store = createStore(
		  rootReducer,
		  initialState,
		  compose(
			applyMiddleware(thunk, reduxImmutableStateInvariant()),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		  )
		);
		return store;
	  }

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Provider store={store}>
				<AppBarComponent/>
				<Task />
			</Provider>
		)
	}
}