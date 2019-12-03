const initialState = {
  profileToSwipe:null,
  matches:[],
}

const profiles = (state = initialState, action) => {
  switch(action.type){
    case "SHOW_PROFILE_ON_WINDOW":
      const profile = action.payload.actualProfile
    return {...state,profileToSwipe: profile}
    case "SHOW_MATCHES_ON_WINDOW":
      const matches = action.payload.matches
    return {...state,matches: matches}
    default:
      return state
  }
}

export default profiles
