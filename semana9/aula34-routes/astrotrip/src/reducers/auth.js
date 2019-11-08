const initialState = {
    errorMsg: false,
    errorAdminMsg: false,
    errorNotAdminMsg: false
  }
  
  const auth = (state = initialState, action) => {
    switch(action.type){
      case "SET_ERROR":
        const errorMsg = action.payload.errorMsg
      return {...state,errorMsg: errorMsg}
      case "SET_ERROR_ADMIN":
        const errorAdminMsg = action.payload.errorAdminMsg
      return {...state,errorAdminMsg: errorAdminMsg}
      case "SET_ERROR_NOT_ADMIN":
        const errorNotAdminMsg = action.payload.errorNotAdminMsg
      return {...state,errorNotAdminMsg: errorNotAdminMsg}
      default:
        return state
    }
  }
  
  export default auth
  