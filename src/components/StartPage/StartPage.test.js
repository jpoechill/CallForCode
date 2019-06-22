import React from "react";
import StartPage from "./index.js";
import renderer from "react-test-renderer";

test("StartPage renders", () => {
  const component = renderer.create(<StartPage />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});