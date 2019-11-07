const initialState = {
    errorMsg: false,
    errorAdminMsg: false
  }
  
  const auth = (state = initialState, action) => {
    switch(action.type){
      case "SET_ERROR":
        const errorMsg = action.payload.errorMsg
      return {...state,errorMsg: errorMsg}
      case "SET_ERROR_ADMIN":
        const errorAdminMsg = action.payload.errorAdminMsg
      return {...state,errorAdminMsg: errorAdminMsg}
      default:
        return state
    }
  }
  
  export default auth
  