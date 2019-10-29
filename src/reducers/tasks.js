const initialState = {
	taskName: "Augusto",
	listTasks:[{name:'Beber Cerveja', }]
  };
  
  const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_TASK_NAME":
			return { ...state, taskName: action.payload.taskName };
		case "SEND_TASK_TO_ARRAY":
			const newTask = action.payload.listTasks
			return { ...state, listTasks:  [...state.listTasks, newTask]};
		case "CHECK_TASK":
			const newTaskCheck = action.payload.taskCheckState
			const id = listTasks.findIndex(newTaskCheck)
			console.log(id)
			return { ...state, listTasks:  [...state.listTasks, newTaskCheck]};
		default:
			return state;
	}
  };
  
  export default tasksReducer;
  