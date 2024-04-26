import React from "react";
import { render, screen } from "@testing-library/react";
import Debug from "./Debug";

describe("Debug", () => {
  it.each([
    ['myString', '"myString"'],
    [123, "123"],
    [true, "true"],
    [false, "false"],
    [null, "null"],
    [undefined, "undefined"]
  ])("renders value %s as %s", (value, expected) => {
    render(<Debug label='test' value={value}/>);

    expect(screen.getByText(expected)).toBeVisible();
  });
});