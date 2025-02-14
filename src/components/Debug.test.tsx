import React from "react";
import { render, screen } from "@folio/jest-config-stripes/testing-library/react";
import  Debug  from "./Debug";

describe("Debug", () => {
  it.each([
    ["myString", '"myString"'],
    [123, "123"],
    [true, "true"],
    [false, "false"],
    [null, "null"],
    [undefined, "undefined"],
    [["list", "of", "words"], "[ 'list', 'of', 'words' ]"],
    [[1,2,3],"[ 1, 2, 3 ]"],
    [{ Roll : "Tide"} , '{ Roll : "Tide" }'],
  ])("renders value %s as %s", (value, expected) => {
    render(<Debug label="test" value={value} />);
  
    expect(screen.getByText(expected)).toBeVisible();
  });
});

