const initialState = {
    actualTrip:{},
    trips:[],
  }
  
  const trips = (state = initialState, action) => {
    switch(action.type){
      case "SET_TRIPS":
        const allTrips = action.payload.trips
      return {...state,trips: allTrips}
      case "ACTUAL_TRIP_DETAIL":
        const actualTrip = action.payload.actualTrip
      return {...state,actualTrip: actualTrip}
      default:
        return state
    }
  }
  
  export default trips
  