import { setTask, getTasks, createTask } from './'
import axios from 'axios';

describe("testing post actions", () => {

    const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-augusto'

    const mockTask = {
        id: 1,
        text: "Fazer Cafe",
        day: "seg"
    }

    test("SetTasks", () => {
        const expectedSetTasks = {
            type: 'SET_TASK',
            payload: {
                tasks: [mockTask]
            }
        }
        const result = setTask([mockTask])
        expect(expectedSetTasks).toMatchObject(result)
    })

    test("getTasks", async () => {

        const mockDispatch = jest.fn()

        axios.get = jest.fn(() => ({
            data: mockTask
        }));

        await getTasks()(mockDispatch);
        expect(axios.get).toHaveBeenCalledWith(baseUrl);
    });

    test("createTask", async () => {

        const mockDispatch = jest.fn()

        const expectedBody = {
            text: "Fazer Cafe",
            day: "seg"
        }

        axios.post = jest.fn(() => ({
            status: 200
        }));

        const { text, day } = mockTask
        await createTask(text, day)(mockDispatch);
        expect(axios.post).toHaveBeenCalledWith(baseUrl, expectedBody);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
});
