import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Main from "./component/Main";

describe("NaBar component", () => {
  it("renders correct appBar and home page", () => {
    render(<Main />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText("New style shop")).toBeInTheDocument();
  });

  it("using home page button landing on  product page", () => {
    render(<Main />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    userEvent.click(screen.getByTestId("shopNow"));
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });

  it("landing on  about page", () => {
    render(<Main />);
    userEvent.click(screen.getByText(/about/i));
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
