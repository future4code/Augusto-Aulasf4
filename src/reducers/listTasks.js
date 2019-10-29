const initialState = {
	listTasks: ""
  };
  
  const listTasks = (state = initialState, action) => {
	switch (action.type) {
	  case "SEND_TASK_TO_ARRAY":
		return { ...state, listTasks: action.payload.listTasks };
	  default:
		return state;
	}
  };
  
  export default listTasks;
  