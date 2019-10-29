export const inputTaskName = taskName => {
	return {
	  type: "CREATE_TASK_NAME",
	  payload: {
		taskName: taskName
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

//   export const changePlanetAction = planet => {
// 	return {
// 	  type: "REMOVE_TASK",
// 	  payload: {
// 		planet: planet
// 	  }
// 	};
//   };

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
  