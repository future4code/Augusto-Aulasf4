import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-augusto'


export const setTask = (tasks) => ({
    type: 'SET_TASK',
    payload: {
        tasks
    }
})

export const getTasks = () => async (dispatch) => {

    const response = await axios.get(baseUrl)
    dispatch(setTask(response.data))
}

export const createTask = (text, day) => async (dispatch) => {

    const body = {
        text,
        day
    }
    const response = await axios.post(baseUrl, body)
    if (response.status === 200) {
        dispatch(getTasks())
    }
}