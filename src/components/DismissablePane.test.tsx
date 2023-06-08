import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DismissablePane from './DismissablePane';
import withIntlConfiguration from '../test/util/withIntlConfiguration';

describe('Dismissable Pane', () => {
  it('renders without crashing', () => {
    const setDisplayed = jest.fn();
    render(withIntlConfiguration(<DismissablePane displayed setDisplayed={setDisplayed} />));

    expect(screen.getByText('Close Pane')).toBeVisible();
  });

  it('doesnt render when displayed is false', () => {
    const setDisplayed = jest.fn();
    render(withIntlConfiguration(<DismissablePane displayed={false} setDisplayed={setDisplayed} />));

    expect(screen.queryByText('Close Pane')).toBeNull();
  });


  it('render, then close', async () => {
    const setDisplayed = jest.fn();
    render(withIntlConfiguration(<DismissablePane displayed setDisplayed={setDisplayed} />));

    expect(screen.getByText('Close Pane')).toBeVisible();

    const button = screen.getByRole('button', { name: 'Close Pane' });

    await userEvent.click(button);
    expect(setDisplayed).toHaveBeenCalledWith(false);

    setDisplayed.mockReset();

    const otherButton = screen.getByLabelText('Close Dismissable Pane');

    await userEvent.click(otherButton);
    expect(setDisplayed).toHaveBeenCalledWith(false);
  });
});
