const initialState = {
	taskName: "Augusto",
	listTasks:[]
  };
  
  const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_TASK_NAME":
			return { ...state, taskName: action.payload.taskName };
		case "SEND_TASK_TO_ARRAY":
			return { ...state, listTasks: action.payload.listTasks };
		default:
			return state;
	}
  };
  
  export default tasksReducer;
  