const initialState = {
	removeAll: ""
  };
  
  const removeAll = (state = initialState, action) => {
	switch (action.type) {
	  case "REMOVE_ALL_TASKS":
		return { ...state, removeAll: action.payload.removeAll };
	  default:
		return state;
	}
  };
  
  export default removeAll;
  