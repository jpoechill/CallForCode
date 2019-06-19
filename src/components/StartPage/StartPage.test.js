import React from "react";
import StartPage from "./index.js";
import GeneralInformation from "../GeneralInformation";
import renderer from "react-test-renderer";

test("StartPage contains form components", () => {
  const component = renderer.create(<StartPage />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/*
import { shallow } from "../../enzyme";

test("StartPage tests", () => {
  const wrapper = shallow(<StartPage />);
  expect(wrapper.find(GeneralInformation)).to.have.lengthOf(1);
});

<h1>StartPage</h1>
      <GeneralInformation />
      <AdditionalContact />
      <CashGrantInformation />
      <Notes />
      <PhotoID />
      <AddressProof />
      <HouseDamage />
      <Receipts />
      <Agencies />
      <Signature />
      */
