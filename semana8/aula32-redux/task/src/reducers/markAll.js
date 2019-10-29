const initialState = {
	markAll: ""
  };
  
  const markAll = (state = initialState, action) => {
	switch (action.type) {
	  case "CHECK_ALL_TASKS":
		return { ...state, markAll: action.payload.markAll };
	  default:
		return state;
	}
  };
  
  export default markAll;
  