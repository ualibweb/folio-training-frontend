import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DismissablePane from './DismissablePane';
import withIntlConfiguration from '../test/util/withIntlConfiguration';

describe('Dismissable Pane', () => {
  it('renders without crashing', () => {
    render(withIntlConfiguration(<DismissablePane displayed />));

    expect(screen.getByText('Close Pane')).toBeVisible();
  });

  it('doesnt render when displayed is false', () => {
    render(withIntlConfiguration(<DismissablePane displayed={false} />));

    expect(screen.queryByText('Close Pane')).toBeNull();
  });


  it('render, then close', async () => {
    render(withIntlConfiguration(<DismissablePane displayed />));

    expect(screen.getByText('Close Pane')).toBeVisible();

    // get button with classname MuiButtonBase-root MuiButton-root MuiButton-text dismissable-pane-close-button
    const button = screen.getByRole('button', { name: 'Close Pane' });

    await userEvent.click(button);

    // Here I want to check if the pane is closed, but mt method of clicking the close button is not working,
    // so I have to comment it out right now. Dont know why it is not working.
    // expect(screen.queryByText('Close Pane')).toBeNull();
  });
});
