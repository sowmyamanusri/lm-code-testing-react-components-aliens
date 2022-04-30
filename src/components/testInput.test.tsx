import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlliensApplicationForm,{AlliensApplicationFormProps}from "./testInput";
import userEvent from "@testing-library/user-event";

describe("AlliensApplicationForm", () => {
  it("should render the basic fields", () => {
      const initialValue:AlliensApplicationFormProps = {
       speciesName:'Animals',
       planetName:'Earth',
       numberOfBeings:1000000000,
       options:'4',
       reasonForSparing:'I am living on the Earth for long years ago'
    }
    render(<AlliensApplicationForm {...initialValue}/>);
    
    expect(
    //  screen.getByRole("heading", {name: "Alliens Apllication Form" })
      screen.getByRole('heading', { name: /allien's application form/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /speciesName/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /planetName/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: /numberOfBeings/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Submit/i })
    ).toBeInTheDocument();
  
})
  
});