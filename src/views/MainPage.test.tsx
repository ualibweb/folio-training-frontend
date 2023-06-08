import { render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';
import withIntlConfiguration from '../test/util/withIntlConfiguration';
import userEvent from '@testing-library/user-event';


describe('Main page', () => {
  it('shows the text', async () => {
    render(withIntlConfiguration(<MainPage />));

    expect(screen.getByText('Show Dismissable Pane')).toBeVisible();
  });

  it('click the toggle window button', async () => {
    render(withIntlConfiguration(<MainPage />));

    // See if we can see the dismissable pane before clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeNull();

    const showButton = screen.getByRole('button', { name: 'Show Dismissable Pane' });

    await userEvent.click(showButton);

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeVisible();
  });

  it('click the toggle window button, then close it', async () => {
    render(withIntlConfiguration(<MainPage />));

    // See if we can see the dismissable pane before clicking the button
    const showButton = screen.getByRole('button', { name: 'Show Dismissable Pane' });

    await userEvent.click(showButton);

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeVisible();

    const closeButton = screen.getByRole('button', { name: 'Close Pane' });

    await userEvent.click(closeButton);

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeNull();
  });
});


