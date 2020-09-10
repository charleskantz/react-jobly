import React from "react";
import { render } from "@testing-library/react";
import Signup from "./Signup";

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  Link: 'a'
}));

// smoke
it("renders without crashing", function() {
  render(
    <Signup />
  );
});

// snapshot
it("matches snapshot", function() {
  const { asFragment } = render(<Signup />);
  expect(asFragment()).toMatchSnapshot();
});