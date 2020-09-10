import React from "react";
import { render } from "@testing-library/react";
import CompanyDetail from "./CompanyDetail";
import { AuthProvider } from "../testUtils";
import { MemoryRouter, Route } from 'react-router-dom';

// smoke
it("renders without crashing", function() {
  render(
    <MemoryRouter>
      <AuthProvider>
        <CompanyDetail />
      </AuthProvider>
    </MemoryRouter>
  );
});

// snapshot
it("matches snapshot", function() {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["company/test"]}>
      <AuthProvider>
        <Route path="/company/:handle">
          <CompanyDetail />
        </Route>
      </AuthProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});