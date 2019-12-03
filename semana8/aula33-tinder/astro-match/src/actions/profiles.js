import axios from 'axios'
import { getMatches } from './index'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/augusto/clear')
	dispatch(getMatches())
}