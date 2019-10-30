const initialState = {
	taskName: "",
	listTasks: [],
	taskFilter: 'todas',
	checkAll: false,
	searchTaskName: ""
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_TASK_NAME":
			return { ...state, taskName: action.payload.taskName };
		case "SET_TASKS":
			return { ...state, listTasks: action.payload.tasksList };
		case "REMOVE_ALL_TASKS":
			const listTasksState = [...state.listTasks]
			const onlyFalseInList = listTasksState.filter((filteredTasks) => {
				return filteredTasks.done === false
			})
			return { ...state, listTasks: onlyFalseInList };
		case "FILTER_TASKS":
			return { ...state, taskFilter: action.payload.taskFilter };
		case "SEARCH_TASK":
			return { ...state, searchTaskName: action.payload.searchTask };
		case "SEND_TASK_TO_ARRAY":
			const newTask = {
				text: action.payload.text,
				id: action.payload.id,
				done: action.payload.done
			}
			return { ...state, taskName: "", listTasks: [...state.listTasks, newTask] };
		case "CHECK_TASK":
			const newTaskCheck = action.payload.taskCheckState
			const listTasksNew = [...state.listTasks]
			const positionTask = listTasksNew.findIndex((Item) => {
				return newTaskCheck.id === Item.id
			})
			listTasksNew[positionTask].done = !listTasksNew[positionTask].done
			return { ...state, listTasks: listTasksNew };
		case "REMOVE_TASK":
			const TaskSelected = action.payload.taskToRemove
			const newListTasks = [...state.listTasks]
			const positionTaskId = newListTasks.findIndex((Item) => {
				return TaskSelected.id === Item.id
			})
			newListTasks.splice(positionTaskId, 1)
			return { ...state, listTasks: newListTasks };
		case "CHECK_ALL_TASKS":
			const checkAllStatus = action.payload.markAll
			const copyListTask = [...state.listTasks]
			for (let task of copyListTask) {

				task.done = !checkAllStatus
			}
			return { ...state, checkAll: !checkAllStatus, listTasks: copyListTask };

		default:
			return state;
	}
};

export default tasksReducer;
