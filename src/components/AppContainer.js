import React from 'react'
import {Task} from './Task'

const initialState = {
	tasks: []
  };

  function reducer(state = initialState, action) {
	switch (action.type) {
	  case "INCREMENT_COUNTER":
		return { ...state, counter: state.counter + 1 };
	  case "DECREMENT_COUNTER":
		return { ...state, counter: state.counter - 1 };
	  case "RESET_COUNTER":
		return { counter: 0 };
	  default:
		return state;
	}
  }

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<Task/>
		</div>
	}
}