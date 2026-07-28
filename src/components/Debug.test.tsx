import React from "react";
import { render, screen } from "@folio/jest-config-stripes/testing-library/react";
import '@testing-library/jest-dom';
import Debug from "./Debug";
import withIntlConfiguration from '../test/util/withIntlConfiguration';

describe("Debug", () => {
  it.each([
    ["myString", '"myString"'],
    [123, "123"],
    [true, "true"],
    [false, "false"],
    [null, "null"],
    [undefined, "undefined"],
    [["list", "of", "words"], '[ "list", "of", "words" ]'],
    [[1, 2, 3], "[ 1, 2, 3 ]"],
    [{ Rhy: "Thm" }, '{ "Rhy": "Thm" }'],
  ])("renders value %s as %s", (value, expected) => {
    render(withIntlConfiguration(<Debug label="test" value={value} />));
    expect(screen.getByText(expected)).toBeVisible();
  });
});