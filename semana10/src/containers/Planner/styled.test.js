import React from "react";
import renderer from "react-test-renderer";
import { PlannerContainer, InputsContainer, Title, Day, Activity, IncludeButton } from './styled'

describe("Styleds", () => {

    it("PlannerContainer", () => {
      const tree = renderer.create(<PlannerContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("IncludeButton", () => {
      const tree = renderer.create(<IncludeButton />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("InputsContainer", () => {
      const tree = renderer.create(<InputsContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Title", () => {
      const tree = renderer.create(<Title />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Day", () => {
      const tree = renderer.create(<Day />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Activity", () => {
      const tree = renderer.create(<Activity />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });