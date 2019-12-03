import axios from 'axios'

export const addProfilesToShow = profile => {
    return {
        type: "SHOW_PROFILE_ON_WINDOW",
        payload: {
            actualProfile: profile
        }
    }
}

export const addMatchesToList = matches => {
    return {
        type: "SHOW_MATCHES_ON_WINDOW",
        payload: {
            matches: matches
        }
    }
}

export const getProfiles = () => async (dispatch, getState) => {
    const result = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/augusto/person')
    dispatch(addProfilesToShow(result.data.profile))
}

export const getMatches = () => async (dispatch, getState) => {
    const res = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/augusto/matches')
    dispatch(addMatchesToList(res.data.matches))
}

export const choosePerson = (id, op) => async (dispatch, getState) => {
    
    const data = {
        id:id,
        choice:op,
    }

    const req = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/augusto/choose-person',data)
    
    dispatch(getProfiles())
}

