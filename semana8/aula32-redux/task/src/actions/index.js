import axios from 'axios'

export const inputTaskName = taskName => {
	return {
		type: "CREATE_TASK_NAME",
		payload: {
			taskName: taskName
		}
	};
};

export const handleSearchTask = taskName => {
	return {
		type: "SEARCH_TASK",
		payload: {
			searchTask: taskName
		}
	};
};

export const sendInputTaskNameToArray = taskList => {
	return {
		type: "SEND_TASK_TO_ARRAY",
		payload: {
			listTasks: taskList
		}
	};
};

export const checkTask = checkState => {
	return {
		type: "CHECK_TASK",
		payload: {
			taskCheckState: checkState
		}
	};
};

export const removeTask = taskToRemove => {
	return {
		type: "REMOVE_TASK",
		payload: {
			taskToRemove: taskToRemove
		}
	};
};

export const removeAllTasks = removeAll => {
	return {
		type: "REMOVE_ALL_TASKS",
		payload: {
			removeAll: removeAll
		}
	};
};

export const checkAllTasks = markAll => {
	return {
		type: "CHECK_ALL_TASKS",
		payload: {
			markAll: markAll
		}
	};
};

export const filterTasks = taskFiltered => {
	return {
		type: "FILTER_TASKS",
		payload: {
			taskFilter: taskFiltered
		}
	};
};

export const setTasks = taskList => {
	return {
	  type: "SET_TASKS",
	  payload: {
		taskList: taskList
	  }
	};
  };

export const fetchTasks = () => async (dispatch, getState) => {
	const result = await axios.get(
	  "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos"
	);
  
	console.log(result.data.todos)
	dispatch(setTasks(result.data.todos));
  };
  
export const createTask = text => async (dispatch, getState) => {
	const response = await axios.post(
	  "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos",
	  {
		text
	  }
	);
	console.log(response)
	// dispatch(
	//   addPost(
	// 	response.data.post.text,
	// 	response.data.post.id,
	// 	response.data.post.likedByMe
	//   )
	// );
  };

  export const toggleToDo = id => async (dispatch, getState) => {
	const responseput = await axios.put(
	  `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos/${id}/toggle`);

	console.log(responseput)
	// dispatch(
	//   addPost(
	// 	response.data.post.text,
	// 	response.data.post.id,
	// 	response.data.post.likedByMe
	//   )
	// );
  };

//   export const deleteToDo = idDel => async (dispatch, getState) => {
// 	const responseput = await axios.delete(
// 	  `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos/${idDel}`);

// 	console.log(responseput)
// 	};


//   export const deleteAllToDo = test => async (dispatch, getState) => {
// 	const responseput = await axios.delete(
// 	  `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos/delete-done`);

// 	console.log(responseput)
// 	};



