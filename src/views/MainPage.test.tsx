import { render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';
import withIntlConfiguration from '../test/util/withIntlConfiguration';


describe('Main page', () => {
  it('shows the text', async () => {
    render(withIntlConfiguration(<MainPage />));

    expect(screen.getByText('Show Dismissable Pane')).toBeVisible();
  });

  it('click the toggle window button', async () => {
    render(withIntlConfiguration(<MainPage />));

    // See if we can see the dismissable pane before clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeNull();

    const b = await screen.findAllByRole('button');

    b.forEach(async (button) => {
      expect(button).toBeVisible();
      await button.click();
    });

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeVisible();
  });

  it('click the toggle window button, then close it', async () => {
    render(withIntlConfiguration(<MainPage />));

    const b = await screen.findAllByRole('button');

    b.forEach(async (button) => {
      expect(button).toBeVisible();
      await button.click();
    });

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeVisible();

    b.forEach(async (button) => {
      expect(button).toBeVisible();
      await button.click();
    });

    // See if we can see the dismissable pane after clicking the button
    expect(screen.queryByText('This is a dismissable pane')).toBeNull();
  });
});


