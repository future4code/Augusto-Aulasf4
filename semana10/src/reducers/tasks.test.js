import tasks from './tasks'

const mockTask = {
    id: 1,
    text: "Fazer Cafe",
    day: "seg"
}

describe("Posts Reducer", ()=>{
    test("SetPosts",()=>{
        const testAction = {
            type: 'SET_TASK',
            payload: {
                tasks : [mockTask]
            }
          };
          const newState = tasks(undefined, testAction);
          expect(newState.allTasks).toHaveLength(1);
          expect(newState.allTasks[0].day).toBe("seg");
    })

    test("Default",()=>{
        const testAction = {
            type: 'DEFAULT',
            payload: {
                tasks : [mockTask]
            }
          };
          const newState = tasks(undefined, testAction);
          expect(newState.allTasks).toHaveLength(0);
    })
})