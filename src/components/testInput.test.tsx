import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlliensApplicationForm, {
  AlliensApplicationFormProps,
} from "./testInput";
import userEvent from "@testing-library/user-event";

const initialValue: AlliensApplicationFormProps = {
  speciesName: "Animals",
  planetName: "Earth",
  numberOfBeings: 1000000000,
  options: "4",
  reasonForSparing: "I am living on the Earth for long years ago",
};

describe("AlliensApplicationForm", () => {
  it("should render the basic fields", () => {
    render(<AlliensApplicationForm {...initialValue} />);

    expect(screen.getByRole("heading", { name: /allien's application form/i })).toBeInTheDocument();
    expect(screen.getByText(/species name:/i)).toBeInTheDocument();
    expect(screen.getByText(/planet name:/i)).toBeInTheDocument();
    expect(screen.getByText(/number of beings:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("Checking the input Value", () => {
    const setup = () => {
      const utils = render(<AlliensApplicationForm {...initialValue} />);
      const input = screen.getByRole('combobox');
      return {
        input,
        ...utils,
      };
    };
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Animals" } });
    expect(input.value).toBe("Animals");
  });
 
});

