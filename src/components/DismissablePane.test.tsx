import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import DismissablePane from './DismissablePane';
import withIntlConfiguration from '../test/util/withIntlConfiguration';
import userEvent from '@testing-library/user-event';

describe('Debug', () => {
  it('when state is false, pane shouldnt render', () => {
    render(
      withIntlConfiguration(
        <DismissablePane
          displayed={false}
          setDisplayed={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
        />,
      ),
    );

    expect(screen.queryByText('This is a dismissable pane')).toBeNull();
    expect(screen.queryByText('Dismissable Pane')).toBeNull();
  });

  it('when state is true, render pane', () => {
    render(
      withIntlConfiguration(
        <DismissablePane
          displayed={true}
          setDisplayed={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
        />,
      ),
    );

    expect(screen.getByText('This is a dismissable pane')).toBeVisible();
    expect(screen.getByText('Dismissable Pane')).toBeVisible();
  });

  it("when state is true, then close", async () => {
    render(withIntlConfiguration(<DismissablePane displayed={true} setDisplayed={function (value: React.SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
    } } />));

    expect(screen.getByText('This is a dismissable pane')).toBeVisible();
    expect(screen.getByText('Dismissable Pane')).toBeVisible();

    // Click the button to dismiss the pane
    await userEvent.click(await screen.findByRole("button"));



  });
});
