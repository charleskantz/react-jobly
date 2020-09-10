import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";

const companyMock = {
  handle: "testinc",
  name: "Test Inc",
  description: "Testing test 1 2 3 test",
  num_employees: 1,
  logo_url: null,
  job_count: 5
}

// smoke
it("renders without crashing", function() {
  render(
    <CompanyCard company={companyMock} />
  );
});

// snapshot
it("matches snapshot", function() {
  const { asFragment } = render(<CompanyCard company={companyMock} />);
  expect(asFragment()).toMatchSnapshot();
});