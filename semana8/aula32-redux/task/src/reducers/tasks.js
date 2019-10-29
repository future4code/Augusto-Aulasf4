const initialState = {
	taskName: "Augusto",
	listTasks:[{name:'Beber Cerveja', id:1, check:false}],
	taskFilter:'pendentes'
  };
  
  const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_TASK_NAME":
			return { ...state, taskName: action.payload.taskName };
		case "FILTER_TASKS":
			return { ...state, taskFilter: action.payload.taskFilter };
		case "SEND_TASK_TO_ARRAY":
			const newTask = action.payload.listTasks
			return { ...state, listTasks:  [...state.listTasks, newTask]};
		case "CHECK_TASK":
			const newTaskCheck = action.payload.taskCheckState	
			const ListTasksNew = [...state.listTasks]
			const PositionTask = ListTasksNew.findIndex((Item) => {
				return newTaskCheck.id === Item.id
			  })
			  ListTasksNew[PositionTask].check=!ListTasksNew[PositionTask].check
				return { ...state, listTasks: ListTasksNew};
		case "checkAllTasks":
			const newTaskCheck = action.payload.taskCheckState	
			const ListTasksNew = [...state.listTasks]
			const PositionTask = ListTasksNew.findIndex((Item) => {
				return newTaskCheck.id === Item.id
			  })
			  ListTasksNew[PositionTask].check=!ListTasksNew[PositionTask].check
				return { ...state, listTasks: ListTasksNew};

		default:
			return state;
	}
  };
  
  export default tasksReducer;
  