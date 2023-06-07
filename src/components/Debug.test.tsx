import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import Debug, { DebugForm } from './Debug';
import { Form } from 'react-final-form';
import { FormApi, SubmissionErrors } from 'final-form';

describe('Debug', () => {
  it.each([
    ["myString", '"myString"'],
    [123, "123"],
    [true, "true"],
    [false, "false"],
    [null, "null"],
    [undefined, "undefined"],
    [{ foo: "bar" }, '{ "foo": "bar" }'],
    [[1, 2, 3], "[ 1, 2, 3 ]"],
    // ...
  ])("renders value %s as %s", (value, expected) => {
    render(<Debug label="test" value={value} />);
  
    expect(screen.getByText(expected)).toBeVisible();
  });

  
});
