import React from "react";
import { shallow } from "enzyme";
import { Planner } from './'
import { IncludeButton } from './styled'
import renderer from "react-test-renderer";

describe("Planner Component", () => {

    const mockTask = {
        id: 1,
        text: "Fazer Cafe",
        day: "seg"
    }

    test("IncludeButton", () => {

        const getTask = jest.fn()
        const createTask = jest.fn()

        const component = shallow(
            <Planner allTasks={[mockTask]} getTasks={getTask} createTask={createTask}/>
          );

          const instance = component.instance();

          instance.includeActivity = jest.fn()

        const includeButton = component.find(IncludeButton);

        expect(includeButton).toHaveLength(1);
        
    })  

    test("IncludeButton", () => {
        
        const getTask = jest.fn()
        const createTask = jest.fn()
          const wrapper = shallow(<Planner allTasks={[mockTask]} getTasks={getTask} createTask={createTask}/>);
          expect(wrapper.find(IncludeButton).children()).toHaveLength(1);
    })  
})
