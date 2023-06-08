import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from 'react-final-form';
import { FormApi } from 'final-form';
import Debug, { DebugForm } from './Debug';

describe('Debug', () => {
  it.each([
    ['myString', '"myString"'],
    [123, '123'],
    [true, 'true'],
    [false, 'false'],
    [null, 'null'],
    [undefined, 'undefined'],
    [{ foo: 'bar' }, '{ "foo": "bar" }'],
    [[1, 2, 3], '[ 1, 2, 3 ]'],
    // ...
  ])('renders value %s as %s', (value, expected) => {
    render(<Debug label="test" value={value} />);

    expect(screen.getByText(expected)).toBeVisible();
  });

  // where defaultOpen is true
  it('renders open by default', () => {
    render(<Debug label="test" value={[1, 2, 3]} defaultOpen />);

    // Run DebugForm to get the form values
    render(
      <Form
        onSubmit={jest.fn()}
        render={({ form }: { form: FormApi }) => (
          <DebugForm defaultOpen={form.getState().values.debugOpen} />
        )}
      />
    );

    expect(screen.getByText('[ 1, 2, 3 ]')).toBeVisible();
  });
});
