import axios from 'axios'

const setActualTrip = (actualTrip) => ({
	type: 'ACTUAL_TRIP_DETAIL',
	payload: {
		actualTrip
	}
})

const setTrips = (trips) => ({
	type: 'SET_TRIPS',
	payload: {
		trips
	}
})

export const getTrips = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/augusto/trips')

	dispatch(setTrips(response.data.trips))
}

export const getTripDetail = (id) => async (dispatch) => {
	const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/augusto/trip/${id}`)

	dispatch(setActualTrip(response.data.trip))
}