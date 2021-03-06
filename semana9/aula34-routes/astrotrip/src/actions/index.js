import axios from 'axios'

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/augusto'

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
	const response = await axios.get(`${urlBase}/trips`)

	dispatch(setTrips(response.data.trips))
}

export const getTripDetail = (id) => async (dispatch) => {

	const token = window.localStorage.getItem("token");

	const response = await axios.get(`${urlBase}/trip/${id}`,
		{
			headers: {
				auth: token
			}
		})
	dispatch(setActualTrip(response.data.trip))
}

export const createTrip = (name, planet, date, description, durationInDays) => async (dispatch) => {

	const token = window.localStorage.getItem("token");

	const data = {
		name: name,
		planet: planet,
		date: date,
		description: description,
		durationInDays: durationInDays,
	}

	const response = await axios.post(`${urlBase}/trips`, data, {
		headers: {
			auth: token
		}
	})
}

export const applyToTrip = (name, age, applicationText, profession, country, tripId) => async (dispatch) => {

	const data = {
		name: name,
		age: age,
		applicationText: applicationText,
		profession: profession,
		country: country,
		tripId: tripId
	}

	const response = await axios.post(`${urlBase}/trips/${tripId}/apply`, data)
}

export const deleteTrip = (id) => async (dispatch) => {
	const response = await axios.delete(`${urlBase}/trips/${id}`)
	dispatch(getTrips())
}

export const decideCandidate = (tripId, candidateId, approve) => async (dispatch) => {

	const token = window.localStorage.getItem("token");

	const body = {
		approve: approve
	}

	const response = await axios.put(`${urlBase}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
		headers: {
			auth: token
		}
	})

}