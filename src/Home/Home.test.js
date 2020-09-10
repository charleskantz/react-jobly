import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";
import { AuthProvider } from "../testUtils";

//smoke
it("renders", function () {
  render(
    <MemoryRouter>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </MemoryRouter>
  )
});

// snapshots
it("matches snapshot when logged in", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <AuthProvider userInfo={null}>
        <Home />
      </AuthProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

// button link
it("links you to /companies when logged in", function () {
  const { getByText } = render(
    <MemoryRouter>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </MemoryRouter>
  );

  const button = getByText('Find Jobs Now');
  expect(button.getAttribute('href')).toBe('/companies');
})

it("links you to /login when logged out", function () {
  const { getByText } = render(
    <MemoryRouter>
      <AuthProvider userInfo={null} >
        <Home />
      </AuthProvider>
    </MemoryRouter>
  );

  const button = getByText('Find Jobs Now');
  expect(button.getAttribute('href')).toBe('/login');
})
