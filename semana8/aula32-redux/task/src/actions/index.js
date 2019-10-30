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

export const sendInputTaskNameToArray = (text,id,done) => {
	return {
		type: "SEND_TASK_TO_ARRAY",
		payload: {
			text: text,
			id: id,
			done: done,
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
		tasksList: taskList
	  }
	};
  };

export const fetchTasks = () => async (dispatch, getState) => {
	const result = await axios.get(
	  "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos"
	);

	dispatch(setTasks(result.data.todos));
  };
  
export const createTask = text => async (dispatch, getState) => {
	const response = await axios.post(
	  "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos",
	  {
		text
	  }
	);
	dispatch(
	  sendInputTaskNameToArray(
		response.data.todo.text,
		response.data.todo.id,
		response.data.todo.done
	  )
	);
  };

  export const toggleToDo = id => async (dispatch, getState) => {

	const responseput = await axios.put(
	  `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos/${id}/toggle`);
	  dispatch(fetchTasks())
  };

  export const deleteToDo = idDel => async (dispatch, getState) => {
	console.log(idDel)
	const responseDelete = await axios.delete(
	  `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos/${idDel.id}`);
	  dispatch(fetchTasks())
	};

	export const toggleAll = id => async (dispatch, getState) => {
		dispatch(checkAllTasks())
	const resultList = await axios.get(
		"https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos"
	  );

	  const listTaskToRemove = resultList.data.todos

	  listTaskToRemove.forEach(element => {
			dispatch(toggleToDo(element.id))
		});
		  

	}

  export const deleteAllToDo = test => async (dispatch, getState) => {

	const responseDeleteAll = await axios.delete(
	  `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/augusto/todos/delete-done`);
	  dispatch(fetchTasks())
	};



