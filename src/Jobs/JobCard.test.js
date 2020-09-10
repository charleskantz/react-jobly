import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";

const jobMock = {
  id: 1,
  title: "tester",
  salary: 100,
  equity: 100,
  state: null,
  company_name: "test inc"
}

// smoke
it("renders without crashing", function() {
  render(
    <JobCard job={jobMock} />
  );
});

// snapshot
it("matches snapshot", function() {
  const { asFragment } = render(<JobCard job={jobMock} />);
  expect(asFragment()).toMatchSnapshot();
});